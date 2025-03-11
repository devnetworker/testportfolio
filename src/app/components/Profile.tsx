export default function Profile() {
  return (
    <section className="w-full max-w-3xl mx-auto p-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2 text-white">Profile : Title</h2>
      
      <div className="flex items-start space-x-8">
        {/* 프로필 이미지 */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
          <div className="w-full h-full rounded-full border-2 border-gray-700 flex items-center justify-center bg-gray-800">
            <span className="text-xl text-white">사진</span>
          </div>
        </div>

        {/* 프로필 정보 */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">_I AM</h3>
            <p className="text-gray-300">이름: 이프로</p>
            <p className="text-gray-300">포지션: PM 서비스 기획 / FE Developer(jr)</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-purple-400">_Contact</h3>
            <p className="text-gray-300">Email: leepro@naver.com</p>
            <p className="text-gray-300">Phone: +082 - 1234-5678</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-pink-400">_Channel</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-16 text-gray-300">SNS:</span>
                <div className="flex-1 h-8 border border-gray-700 rounded bg-gray-700 hover:border-blue-500 transition-all duration-300"></div>
              </div>
              <div className="flex items-center">
                <span className="w-16 text-gray-300">GitHub:</span>
                <div className="flex-1 h-8 border border-gray-700 rounded bg-gray-700 hover:border-purple-500 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 