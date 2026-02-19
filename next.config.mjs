/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // 환경 변수 로딩 디버깅
  env: {
    // 이 부분은 실제로는 필요 없지만, 환경 변수가 로드되는지 확인용
  },
};

export default nextConfig;

