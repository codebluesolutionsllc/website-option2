git clone https://github.com/netlify/netlify-cms.git
cd netlify-cms
npm install
npm run build:dist
cp dist/netlify-cms.js /path/to/your-site/public/admin/
