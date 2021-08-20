import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContributionAdmin } from '../../_actions/admin_actions';
import { SearchData } from '../../_actions/admin_actions';
import { SearchAppData } from '../../_actions/admin_actions';
import RequestTable from './RequestTable';
import ApprovalTable from './ApprovalTable';
import AdminSignInModal from '../Common/AdminModal/AdminSignInModal';
import store from '../../store/store';

function AdminWrapper() {
  const dispatch = useDispatch();

  const [Requested, setRequested] = useState(null);
  const [Accepted, setAccepted] = useState(null);
  const [AllData, setAllData] = useState(false);
  const [Select, setSelect] = useState('');
  const [Text, setText] = useState('');
  const [AppText, setAppText] = useState('');
  const [ModalOpen, setModalOpen] = useState(false);
  const [Admin, setAdmin] = useState(false);

  /*
승인요청 - 게시대기(100), 게시승인(110), 게시거부(120)
수정요청 - 수정대기(101), 수정승인(111), 수정거부(121)
삭제요청 - 삭제대기(102), 삭제승인(112), 삭제거부(122)
*/

  let selectOptions = [
    ['승인요청', 'postRequest'],
    ['수정요청', 'patchRequest'],
    ['삭제요청', 'deleteRequest'],
  ];

  useEffect(() => {
    if (store.getState().admin.adminSigninSuccess) {
      if (store.getState().admin.adminSigninSuccess === 'Login success') {
        setModalOpen(false);
        setAdmin(true);
      } else {
        setModalOpen(true);
        setAdmin(false);
      }
    }
  });

  useEffect(() => {
    dispatch(getContributionAdmin())
      .then(res => {
        setRequested([
          ...res.payload.data.requested.postRequest,
          ...res.payload.data.requested.patchRequest,
          ...res.payload.data.requested.deleteRequest,
        ]);
        setAccepted(res.payload.data.accepted);
        setAllData(true);
      })
      .catch(err => alert('관리데이터 받아오는데 실패하였습니다.'));
  }, []);

  function onSelectHandler(e) {
    setSelect(e.currentTarget.value);
  }

  function onTextHandler(e) {
    setText(e.currentTarget.value);
  }

  function onAppTextHandler(e) {
    setAppText(e.currentTarget.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    dispatch(SearchData(Select, Text))
      .then(res => setRequested(res.payload))
      .catch(err => alert('검색한 결과를 받아오는데 실패하였습니다.'));
  }

  function onApprovalHandler(e) {
    e.preventDefault();

    dispatch(SearchAppData(AppText))
      .then(res => {
        setAccepted(res.payload);
        window.location.reload();
      })
      .catch(err => alert('검색한 결과를 받아오는데 실패하였습니다.'));
  }

  return AllData ? (
    <>
      <div className="admin">
        <div className="container">
          <div className="row">
            {Admin ? (
              <div className="col-sm-4">
                <div className="request">
                  <h2>
                    요청
                    <span className="request-sub">
                      승인, 수정, 삭제 요청을 확인할 수 있고, 승인하거나 거부할
                      수 있습니다.
                    </span>
                  </h2>
                  <div>
                    <form
                      onSubmit={e => onSubmitHandler(e)}
                      className="request-form"
                    >
                      <select
                        className="request-select"
                        onChange={e => onSelectHandler(e)}
                        id="request-select"
                      >
                        <option value="">모든요청</option>
                        {selectOptions.map((el, idx) => (
                          <option key={idx} value={el[1]}>
                            {el[0]}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        className="request-text"
                        placeholder="닉네임을 검색하세요."
                        onChange={e => onTextHandler(e)}
                      />
                      <button type="submit" className="request-search">
                        검색
                      </button>
                    </form>
                  </div>
                  <div className="request-manage">
                    <RequestTable Requested={Requested} />
                  </div>
                </div>
                <div className="approval">
                  <h2>
                    승인
                    <span className="approval-sub">
                      승인 처리된 소식을 볼 수 있으며, 이 소식들은 추천 소식으로
                      보여집니다.
                    </span>
                  </h2>
                  <div>
                    <form
                      onSubmit={e => onApprovalHandler(e)}
                      className="approval-form"
                    >
                      <input
                        type="text"
                        className="approval-text"
                        placeholder="닉네임을 검색하세요."
                        onChange={e => onAppTextHandler(e)}
                      />
                      <button type="submit" className="approval-search">
                        검색
                      </button>
                    </form>
                  </div>
                  <div className="approval-manage">
                    <ApprovalTable data={Accepted} />
                  </div>
                </div>
                <div className="admin-footer" />
              </div>
            ) : null}
          </div>
        </div>
        {ModalOpen ? (
          <AdminSignInModal ModalOpen={ModalOpen} setModalOpen={setModalOpen} />
        ) : null}
      </div>
    </>
  ) : null;
}

export default AdminWrapper;
