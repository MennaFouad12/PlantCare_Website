

// import React, { useState, useEffect, useMemo } from "react";
// import { Paperclip, Send, ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react";
// import { useFormik } from "formik";
// import { addComment, addDisLike, addLike, addPosts, EditPost, getPostsWithComments } from "../../Apis/community";
// import useQueryCommunity from "../../Hooks/useQueryCommunity";
// import useMutationCommunity from "../../Hooks/useMutationCommunity";
// import { toast } from "react-toastify";
// import CommunityBasicModal from "../CommunityBasicModel";
// import { jwtDecode } from "jwt-decode";
// import CommentBasicModal from "./CommentBasicModel";
// import Avatar from "react-avatar";

// function Community() {
//   const [previewImage, setPreviewImage] = useState(null);
//   const { data = [], isLoading, isError } = useQueryCommunity('community', getPostsWithComments);
//   const { mutate: addPost, isPending: isPosting } = useMutationCommunity(addPosts);
//   const { mutate: likePost, isPending: islike } = useMutationCommunity(addLike);
//   const { mutate: dislikePost, isPending: dislike } = useMutationCommunity(addDisLike);
//   const { mutate: commentOnPost, isPending: Comminting } = useMutationCommunity(addComment);
//   const { mutate: editpost, isPending: editingpost } = useMutationCommunity(EditPost);
  
//   let tokendata = jwtDecode(localStorage.getItem('userToken'));
//   const userId = tokendata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
//   const [commentTexts, setCommentTexts] = useState({});
//   const [activePost, setActivePost] = useState(null);

//   // Calculate active users from the posts data
//   const activeUsers = useMemo(() => {
//     if (!data || data.length === 0) return [];

//     const userMap = new Map();

//     data.forEach(post => {
//       if (!userMap.has(post.userId) || 
//           new Date(post.createdAt) > new Date(userMap.get(post.userId).lastActive)) {
//         userMap.set(post.userId, {
//           userId: post.userId,
//           name: post.createdBy,
//           lastActive: post.createdAt,
//           avatar: post.createdBy.charAt(0),
//           postCount: data.filter(p => p.userId === post.userId).length,
//           likesReceived: data
//             .filter(p => p.userId === post.userId)
//             .reduce((sum, p) => sum + (p.totalNumOfLikes || 0), 0)
//         });
//       }
//     });

//     return Array.from(userMap.values())
//       .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
//       .slice(0, 5);
//   }, [data]);
// console.log(activeUsers);
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffInHours = (now - date) / (1000 * 60 * 60);

//     if (diffInHours < 24) {
//       return date.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit'
//       });
//     } else {
//       return date.toLocaleDateString('en-US', {
//         month: 'short',
//         day: 'numeric'
//       });
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       PostContent: "",
//       imageFile: null,
//     },
//     onSubmit: async (values) => {
//       if (values.PostContent.trim() === "" && !values.imageFile) return;
//       await addPost(values, {
//         onSuccess: (data) => {
//           toast.success("Post added successfully!");
//           formik.resetForm();
//         },
//         onError: (error) => {
//           toast.error(`Error: ${error.response?.data?.message || error.message}`);
//         }
//       });
//       setPreviewImage(null);
//     },
//   });

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//       formik.setFieldValue("imageFile", file);
//     }
//   };

//   const handleCommentChange = (postId, value) => {
//     setCommentTexts(prev => ({
//       ...prev,
//       [postId]: value,
//     }));
//   };

//   const handleAddComment = (postId) => {
//     const comment = commentTexts[postId];
//     if (!comment || comment.trim() === "") return;

//     commentOnPost({ 
//       postId, 
//       commentText: comment 
//     }, {
//       onSuccess: () => {
//         toast.success("Comment added!");
//         setCommentTexts(prev => ({
//           ...prev,
//           [postId]: "",
//         }));
//       },
//       onError: (error) => {
//         toast.error(`Error: ${error.response?.data?.message || error.message}`);
//       }
//     });
//   };

//   return (
//     <div className="flex flex-col container h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-green-700 text-white p-4 shadow-md">
//         <h1 className="text-xl font-bold text-center">Plant Care Community</h1>
//       </header>

//       {/* Main Content */}
//       <div className="flex  flex-1 overflow-hidden">
//         {/* Sidebar - Active Users */}
//         <div className="w-80 h-5/6 bg-white border-r border-gray-200 p-4 hidden md:block overflow-y-auto">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">Active Members ({activeUsers.length})</h2>
//           <div className="space-y-3">
//             {activeUsers.map((user) => (
//               <div 
//                 key={`user-${user.userId}`} 
//                 className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
//               >
//                 <Avatar 
//                   name={user.name} 
//                   size="40" 
//                   round 
//                   className="mr-3 flex-shrink-0"
//                   textSizeRatio={2}
//                 />
//                 <div className="min-w-0">
//                   <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
//                   <div className="flex md:flex-col lg:flex-row justify-between items-center">
//                     <p className="text-xs text-gray-500 truncate mr-5">
//                       Active {formatDate(user.lastActive)}
//                     </p>
//                     <div className="flex space-x-1">
//                       <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
//                         {user.postCount} post{user.postCount !== 1 ? 's' : ''}
//                       </span>
//                       <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">
//                         {user.likesReceived} like{user.likesReceived !== 1 ? 's' : ''}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             {activeUsers.length === 0 && (
//               <p className="text-sm text-gray-500 text-center py-2">No active members found</p>
//             )}
//           </div>
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 h-5/6 flex flex-col">
//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
//             {isLoading ? (
//               <div className="flex justify-center items-center h-full">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
//               </div>
//             ) : isError ? (
//               <div className="flex justify-center items-center h-full">
//                 <p className="text-red-500">Error loading posts</p>
//               </div>
//             ) : (
//               data.map((msg) => (
//                 <div key={msg.id} className="mb-6 bg-white p-4 rounded-lg shadow-sm">
//                   {/* Post Header */}
//                   <div className="flex items-start mb-2">
//                     <Avatar 
//                       name={msg.createdBy} 
//                       size="40" 
//                       round 
//                       className="mr-3 flex-shrink-0"
//                       textSizeRatio={2}
//                     />
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-center justify-between">
//                         <div className="min-w-0">
//                           <span className="font-medium text-gray-900 truncate block">{msg.createdBy}</span>
//                           <span className="text-xs text-gray-500">{formatDate(msg.createdAt)}</span>
//                         </div>
//                         {userId === msg.userId && (
//                           <CommunityBasicModal msg={msg}>
//                             <button 
//                               className="text-gray-400 hover:text-gray-600 p-1"
//                               aria-label="Post options"
//                             >
//                               <MoreVertical size={16} />
//                             </button>
//                           </CommunityBasicModal>
//                         )}
//                       </div>
                      
//                       {/* Post Content */}
//                       <div className="mt-2">
//                         <p className="text-gray-800 whitespace-pre-wrap">{msg.postContent}</p>
//                         {msg.image && (
//                           <div className="mt-3">
//                             <img 
//                               src={`http://plantcareapi.runasp.net${msg.image}`} 
//                               alt="Post content" 
//                               className="max-w-full max-h-48 rounded-lg border border-gray-200 max-h-96 object-contain"
//                               loading="lazy"
//                             />
//                           </div>
//                         )}
//                       </div>

//                       {/* Reactions */}
//                       <div className="flex items-center mt-3 space-x-4">
//                         <button 
//                           onClick={() => likePost(msg.id)}
//                           className={`flex items-center space-x-1 ${msg.userLiked ? 'text-green-600' : 'text-gray-500'} hover:text-green-600 transition-colors`}
//                           aria-label="Like post"
//                         >
//                           <ThumbsUp size={16} />
//                           <span className="text-xs">{msg.totalNumOfLikes}</span>
//                         </button>
//                         <button 
//                           onClick={() => dislikePost(msg.id)}
//                           className={`flex items-center space-x-1 ${msg.userDisliked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
//                           aria-label="Dislike post"
//                         >
//                           <ThumbsDown size={16} />
//                           <span className="text-xs">{msg.totalNumOfDislikes}</span>
//                         </button>
//                       </div>

//                       {/* Comments */}
//                       <div className="mt-4 pl-2 border-l-2 border-gray-200">
//                         <h4 className="text-sm font-medium text-gray-700 mb-2">
//                           Comments ({msg.comments.length})
//                         </h4>
//                         {msg.comments.map((comment) => (
//                           <div key={comment.id} className="mb-3 group">
//                             <div className="flex items-center">
//                               <Avatar 
//                                 name={comment.commentedBy} 
//                                 size="28" 
//                                 round 
//                                 className="mr-2 flex-shrink-0"
//                                 textSizeRatio={2}
//                               />
//                               <div className="flex-1 min-w-0">
//                                 <div className="flex items-center justify-between">
//                                   <div className="min-w-0">
//                                     <span className="text-xs font-medium text-gray-800 truncate block">
//                                       {comment.commentedBy}
//                                     </span>
//                                     {/* <span className="text-xs text-gray-500">
//                                       {formatDate(comment.createdAt)}
//                                     </span> */}
//                                   </div>
//                                   {userId === comment.userId && (
//                                     <CommentBasicModal Comment={comment}>
//                                       <button 
//                                         className="text-gray-400 opacity-0 group-hover:opacity-100 p-1 transition-opacity"
//                                         aria-label="Comment options"
//                                       >
//                                         <MoreVertical size={14} />
//                                       </button>
//                                     </CommentBasicModal>
//                                   )}
//                                 </div>
//                                 <p className="text-sm text-gray-700 whitespace-pre-wrap mt-1">
//                                   {comment.comment}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         ))}

//                         {/* Add Comment */}
//                         <div className="mt-3 flex">
//                           <Avatar 
//                             name={tokendata.FullName} 
//                             size="28" 
//                             round 
//                             className="mr-2 flex-shrink-0"
//                             textSizeRatio={2}
//                           />
//                           <div className="flex-1 flex">
//                             <input
//                               type="text"
//                               placeholder="Write a comment..."
//                               value={commentTexts[msg.id] || ""}
//                               onChange={(e) => handleCommentChange(msg.id, e.target.value)}
//                               className="flex-1 text-sm border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                               aria-label="Write a comment"
//                             />
//                             <button
//                               onClick={() => handleAddComment(msg.id)}
//                               className="bg-green-600 text-white px-3 rounded-r-lg hover:bg-green-700 flex items-center transition-colors"
//                               disabled={Comminting}
//                               aria-label="Post comment"
//                             >
//                               <Send size={16} />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* New Post Form */}
//           <div className="px-4 border-t border-gray-200 bg-white">
//             <form onSubmit={formik.handleSubmit} className="flex items-center">
//               <label 
//                 htmlFor="imageFile" 
//                 className="p-2 rounded-full hover:bg-gray-100 cursor-pointer mr-2 transition-colors"
//                 aria-label="Attach image"
//               >
//                 <Paperclip className="text-gray-600 w-5 h-5" />
//                 <input
//                   id="imageFile"
//                   name="imageFile"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="hidden"
//                 />
//               </label>

//               <div className="flex-1 relative">
//                 <input
//                   type="text"
//                   name="PostContent"
//                   placeholder="Share your plant care tips..."
//                   value={formik.values.PostContent}
//                   onChange={formik.handleChange}
//                   className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
//                   aria-label="Write a post"
//                 />
//                 <button
//                   type="submit"
//                   disabled={isPosting}
//                   className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors"
//                   aria-label="Send post"
//                 >
//                   <Send size={20} />
//                 </button>
//               </div>
//             </form>

//             {/* Image Preview */}
//             {previewImage && (
//               <div className="mt-3 flex items-center">
//                 <div className="relative">
//                   <img
//                     src={previewImage}
//                     alt="Preview"
//                     className="w-16 h-16 rounded-lg object-cover border border-gray-200"
//                   />
//                   <button
//                     onClick={() => {
//                       setPreviewImage(null);
//                       formik.setFieldValue("imageFile", null);
//                     }}
//                     className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm text-gray-500 hover:text-red-500 transition-colors"
//                     aria-label="Remove image"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//                 <span className="ml-2 text-sm text-gray-500">Ready to post</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Community;






import React, { useState, useEffect, useMemo } from "react";
import { Paperclip, Send, ThumbsUp, ThumbsDown, MoreVertical } from "lucide-react";
import { useFormik } from "formik";
import { addComment, addDisLike, addLike, addPosts, EditPost, getPostsWithComments, removeReactionApi } from "../../Apis/community";
import useQueryCommunity from "../../Hooks/useQueryCommunity";
import useMutationCommunity from "../../Hooks/useMutationCommunity";
import { toast } from "react-toastify";
import CommunityBasicModal from "../CommunityBasicModel";
import { jwtDecode } from "jwt-decode";
import CommentBasicModal from "./CommentBasicModel";
import Avatar from "react-avatar";
import { motion, AnimatePresence } from "framer-motion";

function Community() {
  const [previewImage, setPreviewImage] = useState(null);
  const { data = [], isLoading, isError } = useQueryCommunity('community', getPostsWithComments);
  const { mutate: addPost, isPending: isPosting } = useMutationCommunity(addPosts);
  const { mutate: likePost, isPending: islike } = useMutationCommunity(addLike);
  const { mutate: dislikePost, isPending: dislike } = useMutationCommunity(addDisLike);
  const { mutate: removeReaction, isPending: removeReaction1 } = useMutationCommunity(removeReactionApi);
  const { mutate: commentOnPost, isPending: Comminting } = useMutationCommunity(addComment);
  const { mutate: editpost, isPending: editingpost } = useMutationCommunity(EditPost);
  
  let tokendata = jwtDecode(localStorage.getItem('userToken'));
  const userId = tokendata['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  const [commentTexts, setCommentTexts] = useState({});
  const [activePost, setActivePost] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const likeVariants = {
    initial: { scale: 1 },
    liked: { 
      scale: [1, 1.3, 1],
      color: "#16a34a" // green-600
    }
  };

  const dislikeVariants = {
    initial: { scale: 1 },
    disliked: { 
      scale: [1, 1.3, 1],
      color: "#dc2626" // red-600
    }
  };

  const sendButtonVariants = {
    initial: { rotate: 0 },
    hover: { rotate: -15 },
    tap: { scale: 0.9 }
  };

  // Calculate active users from the posts data
  const activeUsers = useMemo(() => {
    if (!data || data.length === 0) return [];

    const userMap = new Map();

    data.forEach(post => {
      if (!userMap.has(post.userId) || 
          new Date(post.createdAt) > new Date(userMap.get(post.userId).lastActive)) {
        userMap.set(post.userId, {
          userId: post.userId,
          name: post.createdBy,
          lastActive: post.createdAt,
          avatar: post.createdBy.charAt(0),
          postCount: data.filter(p => p.userId === post.userId).length,
          likesReceived: data
            .filter(p => p.userId === post.userId)
            .reduce((sum, p) => sum + (p.totalNumOfLikes || 0), 0)
        });
      }
    });

    return Array.from(userMap.values())
      .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
      .slice(0, 5);
  }, [data]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      PostContent: "",
      imageFile: null,
    },
    onSubmit: async (values) => {
      if (values.PostContent.trim() === "" && !values.imageFile) return;
      await addPost(values, {
        onSuccess: (data) => {
          toast.success("Post added successfully!");
          formik.resetForm();
        },
        onError: (error) => {
          toast.error(`Error: ${error.response?.data?.message || error.message}`);
        }
      });
      setPreviewImage(null);
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      formik.setFieldValue("imageFile", file);
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentTexts(prev => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleAddComment = (postId) => {
    const comment = commentTexts[postId];
    if (!comment || comment.trim() === "") return;

    commentOnPost({ 
      postId, 
      commentText: comment 
    }, {
      onSuccess: () => {
        toast.success("Comment added!");
        setCommentTexts(prev => ({
          ...prev,
          [postId]: "",
        }));
      },
      onError: (error) => {
        toast.error(`Error: ${error.response?.data?.message || error.message}`);
      }
    });
  };

  return (
    <div className="flex flex-col container h-screen bg-gray-100">
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-green-700 text-white p-4 shadow-md"
      >
        <h1 className="text-xl font-bold text-center">Plant Care Community</h1>
      </motion.header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Active Users */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="w-80 h-5/6 bg-white border-r border-gray-200 p-4 hidden md:block overflow-y-auto"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Active Members ({activeUsers.length})</h2>
          <div className="space-y-3">
            {activeUsers.map((user) => (
              <motion.div 
                key={`user-${user.userId}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
              >
                <Avatar 
                  name={user.name} 
                  size="40" 
                  round 
                  className="mr-3 flex-shrink-0"
                  textSizeRatio={2}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                  <div className="flex md:flex-col lg:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500 truncate mr-5">
                      Active {formatDate(user.lastActive)}
                    </p>
                    <div className="flex space-x-1">
                      <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                        {user.postCount} post{user.postCount !== 1 ? 's' : ''}
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">
                        {user.likesReceived} like{user.likesReceived !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {activeUsers.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-2">No active members found</p>
            )}
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 h-5/6 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"
                ></motion.div>
              </div>
            ) : isError ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-red-500">Error loading posts</p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {data.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.005 }}
                    className="mb-6 bg-white p-4 rounded-lg shadow-sm"
                  >
                    {/* Post Header */}
                    <div className="flex items-start mb-2">
                      <Avatar 
                        name={msg.createdBy} 
                        size="40" 
                        round 
                        className="mr-3 flex-shrink-0"
                        textSizeRatio={2}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="min-w-0">
                            <span className="font-medium text-gray-900 truncate block">{msg.createdBy}</span>
                            <span className="text-xs text-gray-500">{formatDate(msg.createdAt)}</span>
                          </div>
                          {userId === msg.userId && (
                            <CommunityBasicModal msg={msg}>
                              <button 
                                className="text-gray-400 hover:text-gray-600 p-1"
                                aria-label="Post options"
                              >
                                <MoreVertical size={16} />
                              </button>
                            </CommunityBasicModal>
                          )}
                        </div>
                        
                        {/* Post Content */}
                        <div className="mt-2">
                          <p className="text-gray-800 whitespace-pre-wrap">{msg.postContent}</p>
                          {msg.image && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                              className="mt-3"
                            >
                              <img 
                                src={`http://plantcareapi.runasp.net${msg.image}`} 
                                alt="Post content" 
                                className="max-w-full max-h-48 rounded-lg border border-gray-200 max-h-96 object-contain"
                                loading="lazy"
                              />
                            </motion.div>
                          )}
                        </div>

                        {/* Reactions */}
                        <div className="flex items-center mt-3 space-x-4">
                          <motion.button 
                            onClick={() => {
                              if(msg.isUserLike){
                                removeReaction(msg.id)
                            }
                              else{
                                likePost(msg.id)
                              
                              }
                            }
                            
                          }
                            className="flex items-center space-x-1"
                            aria-label="Like post"
                            variants={likeVariants}
                            initial="initial"
                            animate={msg.isUserLike ? "liked" : "initial"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ThumbsUp size={16} className={msg.isUserLike ? 'text-green-600' : 'text-gray-500'} />
                            <span className={`text-xs ${msg.isUserLike ? 'text-green-600' : 'text-gray-500'}`}>
                              {msg.totalNumOfLikes}
                            </span>
                          </motion.button>
                          <motion.button 
                            onClick={() => {
                              if(msg.isUserDislike){
                                removeReaction(msg.id)
                              }
                              else{
                              dislikePost(msg.id)}
                            }}
                            className="flex items-center space-x-1"
                            aria-label="Dislike post"
                            variants={dislikeVariants}
                            initial="initial"
                            animate={msg.isUserDislike ? "disliked" : "initial"}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ThumbsDown size={16} className={msg.isUserDislike ? 'text-red-500' : 'text-gray-500'} />
                            <span className={`text-xs ${msg.isUserDislike ? 'text-red-500' : 'text-gray-500'}`}>
                              {msg.totalNumOfDislikes}
                            </span>
                          </motion.button>
                        </div>

                        {/* Comments */}
                        <div className="mt-4 pl-2 border-l-2 border-gray-200">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">
                            Comments ({msg.comments.length})
                          </h4>
                          <AnimatePresence>
                            {msg.comments.map((comment) => (
                              <motion.div
                                key={comment.id}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mb-3 group overflow-hidden"
                              >
                                <div className="flex items-center">
                                  <Avatar 
                                    name={comment.commentedBy} 
                                    size="28" 
                                    round 
                                    className="mr-2 flex-shrink-0"
                                    textSizeRatio={2}
                                  />
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <div className="min-w-0">
                                        <span className="text-xs font-medium text-gray-800 truncate block">
                                          {comment.commentedBy}
                                        </span>
                                      </div>
                                      {userId === comment.userId && (
                                        <CommentBasicModal Comment={comment}>
                                          <button 
                                            className="text-gray-400 opacity-0 group-hover:opacity-100 p-1 transition-opacity"
                                            aria-label="Comment options"
                                          >
                                            <MoreVertical size={14} />
                                          </button>
                                        </CommentBasicModal>
                                      )}
                                    </div>
                                    <p className="text-sm text-gray-700 whitespace-pre-wrap mt-1">
                                      {comment.comment}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>

                          {/* Add Comment */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-3 flex"
                          >
                            <Avatar 
                              name={tokendata.FullName} 
                              size="28" 
                              round 
                              className="mr-2 flex-shrink-0"
                              textSizeRatio={2}
                            />
                            <div className="flex-1 flex">
                              <input
                                type="text"
                                placeholder="Write a comment..."
                                value={commentTexts[msg.id] || ""}
                                onChange={(e) => handleCommentChange(msg.id, e.target.value)}
                                className="flex-1 text-sm border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                                aria-label="Write a comment"
                              />
                              <motion.button
                                onClick={() => handleAddComment(msg.id)}
                                className="bg-green-600 text-white px-3 rounded-r-lg hover:bg-green-700 flex items-center transition-colors"
                                disabled={Comminting}
                                aria-label="Post comment"
                                variants={sendButtonVariants}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                              >
                                <Send size={16} />
                              </motion.button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* New Post Form */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-4 border-t border-gray-200 bg-white"
          >
            <form onSubmit={formik.handleSubmit} className="flex items-center">
              <motion.label 
                htmlFor="imageFile" 
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer mr-2 transition-colors"
                aria-label="Attach image"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Paperclip className="text-gray-600 w-5 h-5" />
                <input
                  id="imageFile"
                  name="imageFile"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </motion.label>

              <div className="flex-1 relative">
                <input
                  type="text"
                  name="PostContent"
                  placeholder="Share your plant care tips..."
                  value={formik.values.PostContent}
                  onChange={formik.handleChange}
                  className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  aria-label="Write a post"
                />
                <motion.button
                  type="submit"
                  disabled={isPosting}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700 transition-colors"
                  aria-label="Send post"
                  variants={sendButtonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>

            {/* Image Preview */}
            <AnimatePresence>
              {previewImage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 flex items-center"
                >
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    />
                    <motion.button
                      onClick={() => {
                        setPreviewImage(null);
                        formik.setFieldValue("imageFile", null);
                      }}
                      className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Remove image"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Ready to post</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Community;






































