import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login, Protected, ProtectedAdmin, TransparansiAnggaran, Unauthorized, TambahFeedback, TableFeedback, EditFeedback } from './components';
import { LandingPage, DashboardAdmin, Users, AddUsers, Sureks, FormSktm, DetailSktm, HistorySureks, FormElapor, Profile, Kabas, AddKabas, EkabaDashboard, DetailKaba, HistoryLapor, Lapors, FormPengajuan, DetailPengajuan, DashboardWali, TransparansiAnggarans, TableTransparansi, UploadSurat, DetailFile, TransparansiUser, Penduduks, FormPemilihBaru, TablePemilihBaru, PemilihBaruAdmin, EditUsers, FormSurvey, SurveyKepuasanAdmin } from "./pages"

//--Start Redux--
//Redux and Redux DevToolsExtension
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";

// const reduxDevToolsExtension = false;
// const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // reduxDevToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);
//--End Redux--

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Start All Role */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
        {/* End All Role */}

        {/* Start User */}
        <Routes>
          <Route path="/form-surek" element={
            <Protected>
              <FormSktm />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/history-sureks/" element={
            <Protected>
              <HistorySureks />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/detail-sktm/:id" element={
            <Protected>
              <DetailSktm />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/ekaba-dashboard" element={
              <EkabaDashboard />
          } />
        </Routes>
        <Routes>
          <Route path="/form-elapor/:id" element={
            <Protected>
              <FormElapor />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/history-elapor" element={
            <Protected>
              <HistoryLapor />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/profile" element={
            <Protected>
              <Profile />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/detail-kaba/:id" element={
              <DetailKaba />
          } />
        </Routes>
        <Routes>
          <Route path="/form-pengajuan" element={
            <Protected>
              <FormPengajuan />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/detail-pengajuan/:id" element={
            <Protected>
              <DetailPengajuan />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/detail-file/:id" element={
            <Protected>
              <DetailFile />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/transparansi-user" element={
            <Protected>
              <TransparansiUser />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/add-feedback" element={
            <Protected>
              <TambahFeedback />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/table-feedback" element={
            <Protected>
              <TableFeedback />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/edit-feedback/:id" element={
            <Protected>
              <EditFeedback />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/form-pemilih-baru" element={
            <Protected>
              <FormPemilihBaru />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/table-pemilih-baru" element={
            <Protected>
              <TablePemilihBaru />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/form-survey" element={
            <Protected>
              <FormSurvey />
            </Protected>
          } />
        </Routes>
        {/* End User */}

        {/* Start Admin */}
        <Routes>
          <Route path="/dashboard-admin" element={
            <ProtectedAdmin>
              <DashboardAdmin />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/users" element={
            <ProtectedAdmin>
              <Users />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/add-users" element={
            <ProtectedAdmin>
              <AddUsers />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/edit-users/:id" element={
            <ProtectedAdmin>
              <EditUsers />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/sureks" element={
            <ProtectedAdmin>
              <Sureks />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/kabas" element={
            <ProtectedAdmin>
              <Kabas />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/add-kabas" element={
            <ProtectedAdmin>
              <AddKabas />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/lapors" element={
            <ProtectedAdmin>
              <Lapors />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/transparansi" element={
            <ProtectedAdmin>
              <TransparansiAnggarans />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/table-transparansi" element={
            <ProtectedAdmin>
              <TableTransparansi />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/upload-surek/:id" element={
            <ProtectedAdmin>
              <UploadSurat />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/dashboard-wali" element={
            <ProtectedAdmin>
              <DashboardWali />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/dashboard-wali" element={
            <ProtectedAdmin>
              <DashboardWali />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/penduduks" element={
            <ProtectedAdmin>
              <Penduduks />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/pemilih-baru-admin" element={
            <ProtectedAdmin>
              <PemilihBaruAdmin />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route path="/survey-kepuasan-admin" element={
            <ProtectedAdmin>
              <SurveyKepuasanAdmin />
            </ProtectedAdmin>
          } />
        </Routes>
        {/* End Admin */}

      </BrowserRouter>
    </Provider>
  );
}

export default App;