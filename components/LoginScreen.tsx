
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Lock, User as UserIcon, AlertCircle, Phone, CheckCircle2 } from 'lucide-react';

const LoginScreen: React.FC = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState<'Thầy' | 'Cô'>('Cô'); // Default to Cô
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const success = login(username, password, title);

        if (!success) {
            setError("LIÊN HỆ CÔ MS LY AI 0962859488 ĐỂ ĐƯỢC HỖ TRỢ DÙNG APP");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-white relative z-10 animate-fade-in-up">

                <div className="flex flex-col items-center mb-6">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-xl text-white shadow-lg shadow-rose-200 mb-4">
                        <Heart size={32} fill="currentColor" />
                    </div>
                    <h1 className="text-2xl font-bold text-rose-800 text-center uppercase tracking-wide">LOVELY TEACHER</h1>
                    <p className="text-rose-500 text-sm">🌸 Hệ thống hỗ trợ GVCN 🌸</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Tài khoản</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <UserIcon size={18} />
                            </div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                                placeholder="Nhập tên tài khoản"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Mật khẩu</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-rose-50/50 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none transition"
                                placeholder="Nhập mật khẩu"
                                required
                            />
                        </div>
                    </div>

                    {/* Gender/Title Selection */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Quý Thầy/Cô là:</label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setTitle('Thầy')}
                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all relative
                        ${title === 'Thầy'
                                        ? 'border-rose-500 bg-rose-50 text-rose-700 font-bold shadow-sm'
                                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                            >
                                <span>👨‍🏫 Thầy giáo</span>
                                {title === 'Thầy' && <CheckCircle2 size={16} className="absolute top-2 right-2 text-rose-500" />}
                            </button>
                            <button
                                type="button"
                                onClick={() => setTitle('Cô')}
                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all relative
                        ${title === 'Cô'
                                        ? 'border-pink-500 bg-pink-50 text-pink-700 font-bold shadow-sm'
                                        : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                            >
                                <span>👩‍🏫 Cô giáo</span>
                                {title === 'Cô' && <CheckCircle2 size={16} className="absolute top-2 right-2 text-pink-500" />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-700 text-sm font-bold animate-shake">
                            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-rose-200 transition-all active:scale-[0.98] mt-4"
                    >
                        🌸 ĐĂNG NHẬP
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Phone size={14} />
                        <span>Hỗ trợ kỹ thuật: </span>
                        <span className="font-bold text-rose-600">0962859488</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
