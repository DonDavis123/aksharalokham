import { useState, useRef } from "react";
import { Upload, BookOpen, MessageCircle, User, History, LogOut, FileText, Send, Download, Home, Plus, Bell, Calendar, Users, Star, Coffee, Sparkles, Heart } from "lucide-react";
import './index.css';

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
      return <Dashboard user={user} setUser={setUser} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
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
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">അക്ഷരലോകം</h1>
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
                placeholder="പാസ്‌വേഡ് / Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white py-3 px-4 rounded-xl hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              പ്രവേശിക്കുക / Login ✨
            </button>
          </div>
          <p className="text-center text-gray-600 mt-6">
            അക്കൗണ്ട് ഇല്ലേ? / Don't have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signup')}
              className="text-purple-500 hover:text-purple-600 font-medium underline decoration-2 decoration-purple-200 hover:decoration-purple-400 transition-all duration-200"
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
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 rounded-3xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-3">അക്ഷരലോകം</h1>
          <h2 className="text-2xl text-gray-600 font-medium">Registration 🌟</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
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
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-200"
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
              className="text-teal-500 hover:text-teal-600 font-medium underline decoration-2 decoration-teal-200 hover:decoration-teal-400 transition-all duration-200"
            >
              പ്രവേശിക്കുക / Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ user, setUser, currentPage, setCurrentPage }) {
  const [chatHistory] = useState([
    {
      id: 1,
      title: "മലയാള സാഹിത്യ ചരിത്രം",
      date: "2025-01-15",
      questions: 12,
      document: "malayalam_literature.pdf",
      lastMessage: "സാഹിത്യത്തിൻറെ പ്രാധാന്യം എന്താണ്?"
    },
    {
      id: 2,
      title: "കേരള ചരിത്രം",
      date: "2025-01-14",
      questions: 8,
      document: "kerala_history.pdf",
      lastMessage: "കേരളത്തിലെ പ്രധാന രാജവംശങ്ങൾ ഏവയാണ്?"
    }
  ]);

  function handleLogout() {
    setUser(null);
    setCurrentPage('login');
  }

  const dashboardPage = currentPage === 'login' || currentPage === 'signup' ? 'home' : currentPage;

  const renderDashboardContent = () => {
    switch (dashboardPage) {
      case 'account':
        return <Account user={user} />;
      case 'chat':
        return <Chat user={user} />;
      case 'study':
        return user.type === 'student' ? <StudyMaterials user={user} /> : <TeacherNotes user={user} />;
      default:
        return <HomePage user={user} chatHistory={chatHistory} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <nav className="w-72 bg-white/80 backdrop-blur-sm shadow-xl border-r border-white/20">
        <div className="p-6 border-b border-white/30">
          <div className="flex items-center space-x-4">
            <div className={`h-12 w-12 ${user.type === 'teacher' ? 'bg-gradient-to-r from-green-400 to-teal-400' : 'bg-gradient-to-r from-purple-400 to-pink-400'} rounded-2xl flex items-center justify-center shadow-lg`}>
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">അക്ഷരലോകം</h2>
              <p className="text-sm text-gray-500 flex items-center space-x-1">
                <span>{user.type === 'teacher' ? '👩‍🏫 അധ്യാപകൻ' : '📚 വിദ്യാർത്ഥി'}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <NavLink 
            active={dashboardPage === 'home'} 
            onClick={() => setCurrentPage('home')} 
            icon={Home} 
            label="ഹോം / Home" 
            emoji="🏠"
          />
          <NavLink 
            active={dashboardPage === 'chat'} 
            onClick={() => setCurrentPage('chat')} 
            icon={MessageCircle} 
            label="ചാറ്റ് / Chat" 
            emoji="💬"
          />
          <NavLink 
            active={dashboardPage === 'study'} 
            onClick={() => setCurrentPage('study')} 
            icon={BookOpen} 
            label={user.type === 'teacher' ? 'നോട്ട്സ് / Notes' : 'പഠനം / Study'} 
            emoji={user.type === 'teacher' ? '📝' : '📖'}
          />
          <NavLink 
            active={dashboardPage === 'account'} 
            onClick={() => setCurrentPage('account')} 
            icon={User} 
            label="അക്കൗണ്ട് / Account" 
            emoji="👤"
          />
          
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition duration-200 font-medium"
            >
              <LogOut className="h-5 w-5" />
              <span>ലോഗ് ഔട്ട് / Logout</span>
              <span className="ml-auto">👋</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-auto">
        {renderDashboardContent()}
      </main>
    </div>
  );
}

function NavLink({ active, onClick, icon: Icon, label, emoji }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition duration-200 font-medium ${
        active 
          ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 shadow-sm' 
          : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="flex-1 text-left">{label}</span>
      <span className="text-lg">{emoji}</span>
    </button>
  );
}

function HomePage({ user, chatHistory, setCurrentPage }) {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">
                സ്വാഗതം, {user.name}! 🎉
              </h1>
              <p className="text-xl opacity-90">
                {user.type === 'teacher' 
                  ? 'നിങ്ങളുടെ വിദ്യാർത്ഥികളെ പഠിപ്പിക്കാൻ തയ്യാറാണോ? / Ready to teach your students?'
                  : 'ഇന്ന് എന്താണ് പഠിക്കാൻ ആഗ്രഹിക്കുന്നത്? / What would you like to learn today?'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickActionCard
            icon={MessageCircle}
            title="പുതിയ ചാറ്റ് / New Chat"
            description="പുതിയ PDF അപ്‌ലോഡ് ചെയ്യുക"
            emoji="💬"
            color="from-blue-400 to-indigo-400"
            onClick={() => setCurrentPage('chat')}
          />
          <QuickActionCard
            icon={BookOpen}
            title={user.type === 'teacher' ? 'നോട്ട്സ് / Notes' : 'പഠനം / Study'}
            description={user.type === 'teacher' ? 'വിദ്യാർത്ഥികൾക്കായി നോട്ട്സ് ചേർക്കുക' : 'അധ്യാപകൻ്റെ നോട്ട്സ് കാണുക'}
            emoji={user.type === 'teacher' ? '📝' : '📖'}
            color="from-green-400 to-teal-400"
            onClick={() => setCurrentPage('study')}
          />
          <QuickActionCard
            icon={History}
            title="ചരിത്രം / History"
            description="മുൻ ചാറ്റുകൾ കാണുക"
            emoji="📚"
            color="from-purple-400 to-pink-400"
            onClick={() => setCurrentPage('chat')}
          />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <History className="h-6 w-6 text-purple-500" />
            <span>സമീപകാല ചാറ്റുകൾ / Recent Chats</span>
            <Sparkles className="h-5 w-5 text-yellow-400" />
          </h2>
          
          {chatHistory.length > 0 ? (
            <div className="space-y-4">
              {chatHistory.map(chat => (
                <div key={chat.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer border border-purple-100" 
                     onClick={() => setCurrentPage('chat')}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-purple-500" />
                        <span>{chat.title}</span>
                      </h3>
                      <p className="text-purple-600 mb-2 font-medium">📄 {chat.document}</p>
                      <p className="text-gray-600 text-sm mb-2">"{chat.lastMessage}"</p>
                      <p className="text-gray-500 text-sm flex items-center space-x-4">
                        <span>💭 {chat.questions} ചോദ്യങ്ങൾ</span>
                        <span>📅 {chat.date}</span>
                      </p>
                    </div>
                    <button className="text-purple-500 hover:text-purple-600 p-2 hover:bg-purple-100 rounded-lg transition-all duration-200">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-10 w-10 text-purple-400" />
              </div>
              <p className="text-gray-500 text-lg">ചാറ്റ് ചരിത്രം കാണാൻ ഇല്ല / No chat history available</p>
              <p className="text-gray-400">പുതിയ ചാറ്റ് ആരംഭിക്കാൻ മുകളിൽ ക്ലിക്ക് ചെയ്യുക 💬</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function QuickActionCard({ icon: Icon, title, description, emoji, color, onClick }) {
  return (
    <div 
      className={`bg-gradient-to-r ${color} p-6 rounded-2xl text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="h-8 w-8" />
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </div>
  );
}

function Chat({ user }) {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: `നമസ്കാരം ${user.name}! 🙏 നിങ്ങളുടെ മലയാളം PDF അപ്‌ലോഡ് ചെയ്ത് എന്നോട് ചോദ്യങ്ങൾ ചോദിക്കാവുന്നതാണ്. / Hello! You can upload your Malayalam document and ask me questions about it.`,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      setIsProcessing(true);
      
      const uploadMessage = {
        sender: "System",
        text: `📄 "${file.name}" അപ്‌ലോഡ് ചെയ്തു. പ്രോസസ് ചെയ്യുന്നു... / Uploaded "${file.name}". Processing...`,
        timestamp: new Date().toLocaleTimeString(),
        type: "system"
      };
      
      setMessages(prev => [...prev, uploadMessage]);
      
      setTimeout(() => {
        setIsProcessing(false);
        const readyMessage = {
          sender: "AI",
          text: `✅ "${file.name}" തയ്യാർ! ഇപ്പോൾ നിങ്ങൾക്ക് ഈ PDF-ക്കുറിച്ച് ചോദ്യങ്ങൾ ചോദിക്കാം. 🤖 / Document ready! You can now ask questions about this document.`,
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, readyMessage]);
      }, 2000);
    }
  }

  function sendMessage() {
    if (!input.trim()) return;
    
    const newMessages = [
      ...messages,
      { 
        sender: "You", 
        text: input, 
        timestamp: new Date().toLocaleTimeString() 
      },
      { 
        sender: "AI", 
        text: `🤔 മനസ്സിലായി. ഞാൻ നിങ്ങളുടെ പ്രമാണം പരിശോധിച്ച് ഉത്തരം നൽകാം... ${uploadedFile ? `"${uploadedFile.name}" ൽ നിന്ന് വിവരങ്ങൾ തിരയുന്നു.` : ''} / I understand. Let me check your document and provide an answer...`,
        timestamp: new Date().toLocaleTimeString() 
      }
    ];
    
    setMessages(newMessages);
    setInput("");
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-white/20 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI ചാറ്റ് / AI Chat</h1>
              <p className="text-gray-500">
                {uploadedFile ? `📄 ${uploadedFile.name}` : '📤 പ്രമാണം അപ്‌ലോഡ് ചെയ്യുക / Upload Document'}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-200 flex items-center space-x-2 shadow-lg"
          >
            <Upload className="h-5 w-5" />
            <span>അപ്‌ലോഡ്</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                msg.sender === 'You'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : msg.type === 'system'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <p className="font-medium text-sm mb-1">{msg.sender}</p>
              <p>{msg.text}</p>
              <p className={`text-xs mt-2 ${
                msg.sender === 'You' ? 'text-purple-100' : 'text-gray-500'
              }`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex justify-center">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-500 border-t-transparent"></div>
                <span className="text-gray-600">പ്രോസസ് ചെയ്യുന്നു...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 border-t border-white/20">
        <div className="flex space-x-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="നിങ്ങളുടെ ചോദ്യം ഇവിടെ ടൈപ്പ് ചെയ്യുക... / Type your question here..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/70 backdrop-blur-sm resize-none"
            rows="2"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <Send className="h-5 w-5" />
            <span>അയക്കുക</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Account({ user }) {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">അക്കൗണ്ട് വിവരങ്ങൾ / Account Details</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className={`h-20 w-20 ${user.type === 'teacher' ? 'bg-gradient-to-r from-green-400 to-teal-400' : 'bg-gradient-to-r from-purple-400 to-pink-400'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <User className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-500">
                {user.type === 'teacher' ? '👩‍🏫 അധ്യാപകൻ / Teacher' : '📚 വിദ്യാർത്ഥി / Student'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <label className="block text-sm font-medium text-purple-600 mb-2">Email</label>
                <p className="text-lg text-gray-900">{user.email}</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <label className="block text-sm font-medium text-blue-600 mb-2">User Type</label>
                <p className="text-lg text-gray-900">
                  {user.type === 'teacher' ? 'അധ്യാപകൻ / Teacher' : 'വിദ്യാർത്ഥി / Student'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudyMaterials({ user }) {
  const studyMaterials = [
    {
      id: 1,
      title: "മലയാള വ്യാകരണം",
      description: "അടിസ്ഥാന വ്യാകരണ നിയമങ്ങൾ",
      type: "notes",
      date: "2025-01-20",
      teacher: "രമേഷ് സാർ"
    },
    {
      id: 2,
      title: "കവിതാ പഠനം",
      description: "പ്രസിദ്ധ കവികളുടെ കവിതകൾ",
      type: "assignment",
      date: "2025-01-19",
      teacher: "സുമ ടീച്ചർ"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-purple-500" />
          <span>പഠന സാമഗ്രികൾ / Study Materials</span>
          <Star className="h-6 w-6 text-yellow-400" />
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyMaterials.map(material => (
            <div key={material.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 ${material.type === 'notes' ? 'bg-gradient-to-r from-green-400 to-teal-400' : 'bg-gradient-to-r from-orange-400 to-red-400'} rounded-xl flex items-center justify-center`}>
                  {material.type === 'notes' ? <FileText className="h-6 w-6 text-white" /> : <Calendar className="h-6 w-6 text-white" />}
                </div>
                <span className="text-2xl">{material.type === 'notes' ? '📝' : '📋'}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{material.title}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👩‍🏫 {material.teacher}</span>
                <span>📅 {material.date}</span>
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-200">
                തുറക്കുക / Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeacherNotes({ user }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "മലയാള വ്യാകരണം - അടിസ്ഥാനങ്ങൾ",
      content: "വിദ്യാർത്ഥികൾക്കായുള്ള അടിസ്ഥാന വ്യാകരണ നിയമങ്ങൾ",
      date: "2025-01-20"
    }
  ]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [showForm, setShowForm] = useState(false);

  function addNote() {
    if (newNote.title && newNote.content) {
      setNotes([...notes, {
        id: Date.now(),
        ...newNote,
        date: new Date().toISOString().split('T')[0]
      }]);
      setNewNote({ title: "", content: "" });
      setShowForm(false);
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-2">
            <FileText className="h-8 w-8 text-green-500" />
            <span>വിദ്യാർത്ഥികൾക്കായുള്ള നോട്ട്സ് / Notes for Students</span>
            <Heart className="h-6 w-6 text-red-400" />
          </h1>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-teal-600 transition duration-200 flex items-center space-x-2 shadow-lg"
          >
            <Plus className="h-5 w-5" />
            <span>പുതിയ നോട്ട് / New Note</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">പുതിയ നോട്ട് ചേർക്കുക / Add New Note</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="നോട്ടിന്റെ തലക്കെട്ട് / Note Title"
                value={newNote.title}
                onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
              />
              <textarea
                placeholder="നോട്ടിന്റെ ഉള്ളടക്കം / Note Content"
                value={newNote.content}
                onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
              />
              <div className="flex space-x-4">
                <button
                  onClick={addNote}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-teal-600 transition duration-200"
                >
                  സേവ് ചെയ്യുക / Save
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  റദ്ദാക്കുക / Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {notes.map(note => (
            <div key={note.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
                    <span>{note.title}</span>
                    <span className="text-2xl">📚</span>
                  </h3>
                  <p className="text-gray-600">{note.content}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>📅 {note.date}</span>
                <button className="text-green-500 hover:text-green-600 flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>വിദ്യാർത്ഥികൾക്ക് പങ്കിടുക / Share with Students</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
