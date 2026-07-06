import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Lock, Mail, ArrowRight, Activity } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../lib/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await api.post('/login', { email, password });
      login(response.data.token, response.data.user);
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error(err);
      setError("Login gagal. Periksa kembali email dan password Anda.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ── Left Side (Branding & Image) ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#006370]">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="RS Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#006370] via-[#006370]/80 to-transparent" />
        
        <div className="relative z-10 p-16 flex flex-col justify-between w-full h-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-white text-xl font-extrabold tracking-tight">RS Utama Demo</span>
            </div>
          </div>
          
          <div className="max-w-md">
            <h1 className="text-4xl font-extrabold text-white leading-tight mb-6">
              Sistem Manajemen <br /> Terpadu Rumah Sakit
            </h1>
            <p className="text-[#ccfbf1] text-lg leading-relaxed">
              Kelola data konten, promosi, dan jadwal dokter dengan mudah dan aman dalam satu dashboard.
            </p>
          </div>
        </div>
      </div>

      {/* ── Right Side (Login Form) ── */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 xl:px-32 relative">
        <div className="w-full max-w-sm mx-auto">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-12 h-12 bg-[#006370] rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <span className="text-[#006370] text-2xl font-extrabold tracking-tight">RS Utama Demo</span>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Selamat Datang</h2>
            <p className="text-gray-500 text-sm mb-8">Silakan masuk menggunakan akun administrator Anda.</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-r shadow-sm flex items-start text-sm">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Alamat Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#3b9ca5] focus:border-transparent transition-all outline-none"
                  placeholder="admin@rsutama.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-[#3b9ca5] hover:text-[#006370] transition-colors">
                  Lupa password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:bg-white focus:ring-2 focus:ring-[#3b9ca5] focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#006370] hover:bg-[#00515b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006370] disabled:opacity-70 transition-all shadow-md hover:shadow-lg"
              >
                {isLoading ? (
                  "Memproses..."
                ) : (
                  <>
                    Masuk ke Dashboard
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-10 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} RS Utama Demo. Hak cipta dilindungi.
          </div>
        </div>
      </div>
    </div>
  );
}
