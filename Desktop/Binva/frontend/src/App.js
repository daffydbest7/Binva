import React from 'react';
import { Toaster } from 'react-hot-toast';
import {Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/home/LandingPage';
import LoginPage from './pages/login/LoginPage';
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
        <Route path="/eni-admin" element={<LoginPage />}> </Route>
          <Route path ="/admin" element={<AdminLayout/>} >
          <Route index element={<Admin/>} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/new" element={<NewPost />} />
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
