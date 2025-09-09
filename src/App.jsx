import { useState, useRef, useEffect } from "react";
import { Upload, BookOpen, MessageCircle, User, LogOut, FileText, Send, Plus, Menu, X, ChevronRight, ChevronLeft, MessageSquarePlus } from "lucide-react";

export default function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    if (!user) {
      switch (currentPage) {
        case 'signup':
          return <Signup setUser={setUser} setCurrentPage={setCurrentPage} />;
        default:
          return <Login setUser={setUser} setCurrentPage={setCurrentPage} />;
      }
    } else {
      return <Dashboard user={user} setUser={setUser} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {renderPage()}
    </div>
  );
}

function Login({ setUser, setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (email && password) {
      setUser({
        email,
        name: email.split('@')[0],
        type: email.includes('teacher') ? 'teacher' : 'student'
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-green-300 to-teal-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-br from-blue-300 to-green-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">അക്ഷരലോകം</h1>
          <h2 className="text-2xl text-gray-600 font-medium">Aksharalokam</h2>
          <p className="text-gray-500 mt-2 text-lg">Malayalam Learning Platform ✨</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
                placeholder="നിങ്ങളുടെ ഇമെയിൽ / Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
                placeholder="പാസ്‌വേഡ് / Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white py-3 px-4 rounded-xl hover:from-green-500 hover:via-teal-500 hover:to-blue-500 transition duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              പ്രവേശിക്കുക / Login ✨
            </button>
          </div>
          <p className="text-center text-gray-600 mt-6">
            അക്കൗണ്ട് ഇല്ലേ? / Don't have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signup')}
              className="text-green-500 hover:text-green-600 font-medium underline decoration-2 decoration-green-200 hover:decoration-green-400 transition-all duration-200"
            >
              രജിസ്റ്റർ ചെയ്യുക / Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Signup({ setUser, setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  function handleSignup(e) {
    e.preventDefault();
    if (email && password) {
      setUser({
        email,
        name: email.split('@')[0],
        type: userType
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-gradient-to-br from-teal-200 to-green-200 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">അക്ഷരലോകം</h1>
          <h2 className="text-2xl text-gray-600 font-medium">Registration 🌟</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
                placeholder="നിങ്ങളുടെ ഇമെയിൽ / Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
                placeholder="പാസ്‌വേഡ് / Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">User Type</label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="student"
                    checked={userType === "student"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${userType === 'student' ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-200'}`}>
                    <span>📚</span>
                    <span>വിദ്യാർത്ഥി / Student</span>
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="teacher"
                    checked={userType === "teacher"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 ${userType === 'teacher' ? 'border-green-400 bg-green-50 text-green-700' : 'border-gray-200 hover:border-green-200'}`}>
                    <span>👩‍🏫</span>
                    <span>അധ്യാപകൻ / Teacher</span>
                  </div>
                </label>
              </div>
            </div>
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white py-3 px-4 rounded-xl hover:from-green-500 hover:via-teal-500 hover:to-blue-500 transition duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              രജിസ്റ്റർ ചെയ്യുക / Register 🌟
            </button>
          </div>
          <p className="text-center text-gray-600 mt-6">
            ഇതിനകം അക്കൗണ്ട് ഉണ്ടോ? / Already have an account?{' '}
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-green-500 hover:text-green-600 font-medium underline decoration-2 decoration-green-200 hover:decoration-green-400 transition-all duration-200"
            >
              പ്രവേശിക്കുക / Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ user, setUser }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('chat');
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  
  const initialChatId = useRef(Date.now()).current;
  const [chatSessions, setChatSessions] = useState([
    {
      id: initialChatId,
      title: "New Chat",
      messages: [{
        sender: "AI",
        text: `നമസ്കാരം ${user.name}! 🙏 മലയാളത്തെക്കുറിച്ച് എന്തെങ്കിലും ചോപിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ? / Hello! Do you have any questions about Malayalam?`,
        timestamp: new Date().toLocaleTimeString()
      }],
      createdAt: new Date().toISOString()
    }
  ]);
  const [currentChatId, setCurrentChatId] = useState(initialChatId);

  const [studyMaterials, setStudyMaterials] = useState({
    std7: {
      malayalam: [{ id: 1, title: "മലയാള വ്യാകരണം - അധ്യായം 1", type: "PDF", uploadedBy: "രമേഷ് സാർ", date: "2025-01-20" }],
      english: [{ id: 3, title: "Grammar Basics", type: "PDF", uploadedBy: "John Sir", date: "2025-01-18" }],
      mathematics: [{ id: 4, title: "Algebra Introduction", type: "PDF", uploadedBy: "രവി സാർ", date: "2025-01-17" }]
    },
    std8: {
      malayalam: [{ id: 5, title: "നാടോടിക്കഥകൾ", type: "PDF", uploadedBy: "ലീല ടീച്ചർ", date: "2025-01-16" }],
      english: [{ id: 6, title: "Literature Basics", type: "PDF", uploadedBy: "Mary Teacher", date: "2025-01-15" }]
    },
    std9: { malayalam: [{ id: 7, title: "ഗദ്യ സാഹിത്യം", type: "PDF", uploadedBy: "കമല സാർ", date: "2025-01-14" }] },
    std10: { malayalam: [{ id: 8, title: "Board Exam Preparation", type: "PDF", uploadedBy: "രാധിക ടീച്ചർ", date: "2025-01-13" }] }
  });

  const classes = ['std7', 'std8', 'std9', 'std10'];
  const subjects = {
    std7: ['malayalam', 'english', 'mathematics', 'science', 'social'],
    std8: ['malayalam', 'english', 'mathematics', 'science', 'social'],
    std9: ['malayalam', 'english', 'mathematics', 'physics', 'chemistry', 'biology', 'social'],
    std10: ['malayalam', 'english', 'mathematics', 'physics', 'chemistry', 'biology', 'social']
  };
  const subjectLabels = {
    malayalam: 'മലയാളം', english: 'English', mathematics: 'ഗണിതം', science: 'സയൻസ്', physics: 'ഫിസിക്സ്', chemistry: 'കെമിസ്ട്രി', biology: 'ബയോളജി', social: 'സാമൂഹിക ശാസ്ത്രം'
  };

  function createNewChat() {
    const mostRecentChat = chatSessions[0];
    if (mostRecentChat && mostRecentChat.title === "New Chat" && mostRecentChat.messages.length === 1) {
      setCurrentChatId(mostRecentChat.id);
      if (window.innerWidth < 1024) setSidebarOpen(false);
      return;
    }
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [{
        sender: "AI", text: `നമസ്കാരം ${user.name}! 🙏 എന്തെങ്കിലും ചോദിക്കാനുണ്ടോ? / Hello! Any questions?`, timestamp: new Date().toLocaleTimeString()
      }],
      createdAt: new Date().toISOString()
    };
    setChatSessions(prev => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  }

  function handleLogout() {
    setUser(null);
  }

  function handleSectionChange(section) {
    setActiveSection(section);
    if (section === 'chat') {
      setSelectedClass(null);
      setSelectedSubject(null);
    }
  }

  const currentChat = chatSessions.find(chat => chat.id === currentChatId);

  return (
    <div className="relative h-screen w-full flex bg-gray-50 overflow-hidden">
      <div className={`absolute lg:relative z-20 h-full flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-80 bg-white shadow-lg border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className={`h-10 w-10 ${user.type === 'teacher' ? 'bg-gradient-to-r from-green-400 to-teal-400' : 'bg-gradient-to-r from-green-400 via-teal-400 to-blue-400'} rounded-lg flex items-center justify-center`}>
                    <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h2 className="font-bold text-lg text-gray-800">അക്ഷരലോകം</h2>
                    <p className="text-sm text-gray-600">Aksharalokam</p>
                </div>
            </div>
        </div>

        {/* New Chat Button - RE-ADDED */}
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={createNewChat}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-2.5 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition duration-200 flex items-center justify-center space-x-2 font-medium"
          >
            <Plus className="h-4 w-4" />
            <span>പുതിയ ചാറ്റ് / New Chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button onClick={() => handleSectionChange('chat')} className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${activeSection === 'chat' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>💬 Chat</button>
                <button onClick={() => handleSectionChange('study')} className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${activeSection === 'study' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>📚 Study</button>
            </div>

            {activeSection === 'chat' && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Chat History</h3>
                <div className="space-y-2">
                  {chatSessions.map(chat => (
                    <button key={chat.id} onClick={() => { setCurrentChatId(chat.id); if(window.innerWidth < 1024) { setSidebarOpen(false); } }} className={`w-full text-left p-3 rounded-lg transition-colors ${currentChatId === chat.id ? 'bg-green-50 border border-green-200 text-green-800' : 'text-gray-700 hover:bg-gray-50 border border-transparent'}`}>
                      <div className="font-medium text-sm truncate">{chat.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{new Date(chat.createdAt).toLocaleDateString()}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {activeSection === 'study' && (
                 <div>
                 {!selectedClass ? (
                   <div>
                     <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Class</h3>
                     <div className="grid grid-cols-2 gap-3">
                       {classes.map(cls => (
                         <button key={cls} onClick={() => setSelectedClass(cls)} className="p-4 bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-green-100 transition-all duration-200 text-center">
                           <div className="text-2xl mb-2">🎓</div>
                           <div className="font-medium text-gray-700">{cls.replace('std', 'Std ')}</div>
                         </button>
                       ))}
                     </div>
                   </div>
                 ) : !selectedSubject ? (
                   <div>
                     <div className="flex items-center space-x-2 mb-4">
                       <button onClick={() => setSelectedClass(null)} className="text-gray-500 hover:text-gray-700"><ChevronLeft className="h-4 w-4" /></button>
                       <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{selectedClass.replace('std', 'Std ')} - Select Subject</h3>
                     </div>
                     <div className="space-y-2">
                       {subjects[selectedClass]?.map(subject => (
                         <button key={subject} onClick={() => setSelectedSubject(subject)} className="w-full p-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg hover:from-green-100 hover:to-blue-100 transition-all duration-200 text-left flex items-center justify-between">
                           <span className="font-medium text-gray-700">{subjectLabels[subject]}</span>
                           <ChevronRight className="h-4 w-4 text-gray-400" />
                         </button>
                       ))}
                     </div>
                   </div>
                 ) : (
                   <div>
                     <div className="flex items-center space-x-2 mb-4">
                       <button onClick={() => setSelectedSubject(null)} className="text-gray-500 hover:text-gray-700"><ChevronLeft className="h-4 w-4" /></button>
                       <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{selectedClass.replace('std', 'Std ')} - {subjectLabels[selectedSubject]}</h3>
                     </div>
                     <div className="space-y-2">
                       {studyMaterials[selectedClass]?.[selectedSubject]?.map(material => (
                         <div key={material.id} className="p-3 rounded-lg bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200">
                           <div className="font-medium text-sm text-gray-800 mb-1">{material.title}</div>
                           <div className="text-xs text-gray-500">📄 {material.type} • {material.uploadedBy}</div>
                           <div className="text-xs text-gray-400 mt-1">{material.date}</div>
                         </div>
                       )) || (
                         <div className="text-center py-8 text-gray-500">
                           <BookOpen className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                           <p>No materials available yet</p>
                         </div>
                       )}
                       {user.type === 'teacher' && <UploadButton user={user} setStudyMaterials={setStudyMaterials} selectedClass={selectedClass} selectedSubject={selectedSubject} />}
                     </div>
                   </div>
                 )}
               </div>
            )}
        </div>
      </div>

      <div className="flex-1 flex flex-col h-screen">
        <div className="flex items-center justify-between gap-4 p-4 lg:p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center gap-4">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-gray-800 transition-colors">
                    <Menu className="h-6 w-6" />
                </button>
                <h1 className="text-xl font-semibold text-gray-800 truncate">
                  {(currentChat && currentChat.title !== 'New Chat') ? currentChat.title : 'Aksharalokam AI'}
                </h1>
            </div>
            <div className="relative">
                <button onClick={() => setProfileOpen(!profileOpen)} className="h-9 w-9 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                </button>
                {profileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 border border-gray-100">
                        <div className="p-2 border-b">
                            <p className="text-sm font-medium text-gray-800">{user.name}</p>
                            <p className="text-xs text-gray-500">{user.type === 'teacher' ? 'Teacher' : 'Student'}</p>
                        </div>
                        <div className="p-1">
                            <button onClick={() => alert('Feedback form not implemented yet.')} className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">Feedback</button>
                            <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>

        <div className="flex-1 overflow-y-hidden">
          {currentChat ? <ChatInterface key={currentChat.id} chat={currentChat} setChatSessions={setChatSessions} user={user} /> : <div>Select a chat</div> }
        </div>
      </div>
    </div>
  );
}

function UploadButton({ user, setStudyMaterials, selectedClass, selectedSubject }) {
    const fileInputRef = useRef(null);
  
    function handleFileUpload(e) {
      const file = e.target.files[0];
      if (file && selectedClass && selectedSubject) {
        const newMaterial = {
          id: Date.now(),
          title: file.name.replace(/\.[^/.]+$/, ""),
          type: file.type.includes('pdf') ? 'PDF' : 'Document',
          uploadedBy: user.name,
          date: new Date().toISOString().split('T')[0]
        };
        
        setStudyMaterials(prev => {
            const updatedMaterials = { ...prev };
            if (!updatedMaterials[selectedClass]) updatedMaterials[selectedClass] = {};
            if (!updatedMaterials[selectedClass][selectedSubject]) updatedMaterials[selectedClass][selectedSubject] = [];
            updatedMaterials[selectedClass][selectedSubject].unshift(newMaterial);
            return updatedMaterials;
        });
      }
    }
  
    return (
      <div className="mt-4">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition duration-200 flex items-center justify-center space-x-2"
        >
          <Upload className="h-4 w-4" />
          <span>Upload Material</span>
        </button>
        <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} className="hidden"/>
      </div>
    );
  }
  
  function ChatInterface({ chat, setChatSessions, user }) {
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);
  
    useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat.messages, isTyping]);
  
    function handleFileUpload(e) {
      const newFiles = Array.from(e.target.files).map(file => ({ name: file.name, size: file.size, type: file.type }));
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  
    function removeFile(index) {
      setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    }
  
    function sendMessage() {
      if (!input.trim() && uploadedFiles.length === 0) return;
  
      let messageText = input;
      if (uploadedFiles.length > 0) {
        const fileNames = uploadedFiles.map(f => f.name).join(', ');
        messageText += `\n\n📎 Uploaded files: ${fileNames}`;
      }
  
      const userMessage = { sender: "You", text: messageText, timestamp: new Date().toLocaleTimeString() };
  
      setChatSessions(prev => prev.map(c => {
        if (c.id === chat.id) {
          const isNewChat = c.title === "New Chat";
          return { ...c, messages: [...c.messages, userMessage], title: isNewChat ? (input.slice(0, 30) || "New Conversation") : c.title };
        }
        return c;
      }));
  
      setInput("");
      setUploadedFiles([]);
      setIsTyping(true);
  
      setTimeout(() => {
        let aiResponse = `നിങ്ങളുടെ ചോദ്യം "${input}" മനസ്സിലായി. ഞാൻ ഈ വിഷയത്തെക്കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ നൽകാൻ ശ്രമിക്കുന്നു... / I understand your question about "${input}". I am trying to provide more information on this topic...`;
        if (uploadedFiles.length > 0) {
          aiResponse += `\n\nനിങ്ങൾ അപ്‌ലോഡ് ചെയ്ത ഫയലുകൾ ഞാൻ വിശകലനം ചെയ്യുന്നുണ്ട്... / I'm analyzing the files you uploaded...`;
        }
        const aiMessage = { sender: "AI", text: aiResponse, timestamp: new Date().toLocaleTimeString() };
        setChatSessions(prev => prev.map(c => c.id === chat.id ? { ...c, messages: [...c.messages, aiMessage] } : c));
        setIsTyping(false);
      }, 1500);
    }
  
    function handleKeyPress(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    }
  
    return (
      <div className="flex flex-col h-full bg-gray-50">
        {/* Main content area: either welcome screen or messages */}
        {chat.messages.length <= 1 ? (
            <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <BookOpen className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-700">Aksharalokam AI</h1>
                <p className="text-gray-500 mt-2">How can I help you today?</p>
            </div>
        ) : (
            <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
                {chat.messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xl px-5 py-3 rounded-2xl shadow-sm ${msg.sender === 'You' ? 'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
                        <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${msg.sender === 'You' ? 'bg-white/20 text-white' : 'bg-green-100 text-green-600'}`}>
                            {msg.sender === 'You' ? user.name.charAt(0).toUpperCase() : 'AI'}
                        </div>
                        <span className={`text-sm font-medium ${msg.sender === 'You' ? 'text-green-100' : 'text-gray-600'}`}>{msg.sender === 'You' ? 'You' : 'അക്ഷരലോകം AI'}</span>
                        </div>
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        <p className={`text-xs mt-2 ${msg.sender === 'You' ? 'text-green-100' : 'text-gray-500'}`}>{msg.timestamp}</p>
                    </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 px-6 py-4 rounded-2xl shadow-sm">
                        <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">AI</div>
                        <span className="text-sm font-medium text-gray-600">അക്ഷരലോകം AI</span>
                        </div>
                        <div className="flex space-x-1 mt-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        )}
  
        {/* Input Area (this is now always visible) */}
        <div className="bg-white border-t border-gray-200 p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            {uploadedFiles.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center bg-green-50 border border-green-200 rounded-full px-3 py-1">
                    <FileText className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm text-green-700">{file.name}</span>
                    <button onClick={() => removeFile(index)} className="ml-2 text-green-600 hover:text-green-800 w-4 h-4 flex items-center justify-center">×</button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="relative">
              <div className="flex items-end bg-white border border-gray-300 rounded-3xl shadow-sm focus-within:border-green-400 focus-within:shadow-md transition-all duration-200">
                <button onClick={() => fileInputRef.current?.click()} className="p-3 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors duration-200 ml-2" title="Attach files">
                  <FileText className="h-5 w-5" />
                </button>
                <input ref={fileInputRef} type="file" accept=".pdf" multiple onChange={handleFileUpload} className="hidden" />
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="നിങ്ങളുടെ ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യുക... / Type your question here..."
                  className="flex-1 px-4 py-3 border-none outline-none resize-none bg-transparent placeholder-gray-500 text-gray-900"
                  rows="1"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                  }}
                />
                <button onClick={sendMessage} disabled={!input.trim() && uploadedFiles.length === 0} className="m-2 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-white p-2 rounded-full hover:from-green-500 hover:via-teal-500 hover:to-blue-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }