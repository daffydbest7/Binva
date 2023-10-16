import React from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/home/LandingPage';
import LoginPageV2 from './pages/login/LoginPageV2';
import AboutPage from './pages/about/AboutPage';
import VolunteerPage from './pages/volunteer/VolunteerPage';
import FaqPage from './pages/faq/FaqPage';
import ContactPage from './pages/contact/ContactPage';
import ArticlePage from './pages/article/ArticlePage';
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import NewPost from "./pages/admin/screens/posts/NewPost";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import UploadImage from './pages/admin/screens/posts/uploadImage';
import Shop from './pages/admin/screens/shop/Shop';
import AllTransaction from './pages/admin/screens/transactions/AllTransaction';
import FraudTransaction from './pages/admin/screens/transactions/FraudTransaction';
import SuccessTransaction from './pages/admin/screens/transactions/SuccessTransaction';
import AllTransactionAsAdmin from './pages/admin/screens/transactions/AllTransactionAsAdmin';
import Product from './pages/admin/screens/shop/Product';
import Payment from './pages/admin/screens/shop/Payment';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={ <LandingPage/>} />
        <Route index path="/about" element={ <AboutPage/>} />
        <Route path="/articles/:id" element={ <ArticleDetailPage/>} />
        <Route index path="/enquiry/faq" element={ <FaqPage/>} />
        <Route index path="/contact" element={ <ContactPage/>} />
        <Route index path="/enquiry/volunteer" element={ <VolunteerPage/>} />
        <Route index path="/article" element={ <ArticlePage/>} />
        <Route path="/login" element={<LoginPageV2/>}></Route>
        <Route path ="/dashboard" element={<AdminLayout/>} >
          <Route index element={<Admin/>} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/new" element={<NewPost />} />
          <Route path="shop" element={<Shop />}/>
          <Route path="shop/product/:id" element={<Product/>} />
          <Route path="shop/product/payment/:id" element={<Payment/>} />
          <Route path="transaction/all" element={<AllTransaction/>} />
          <Route path="admin/transactions" element={<AllTransactionAsAdmin/>} />
          <Route path="transaction/fraud" element={<FraudTransaction/>} />
          <Route path="transaction/success" element={<SuccessTransaction/>} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:id" element={<EditPost />} />
          <Route path="posts/manage/post" element={<UploadImage/>} />
        </Route>
        
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
