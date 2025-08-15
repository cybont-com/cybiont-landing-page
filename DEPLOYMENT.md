# Cybiont Landing Page - Deployment Guide

## 🚀 Quick Deployment

### 1. Build the Project
```bash
npm run build
```

### 2. Deploy to Web Server
```bash
# Upload dist folder to your server
scp -r dist/* user@cybiont.com:/var/www/html/

# Or use rsync for better performance
rsync -avz --delete dist/ user@cybiont.com:/var/www/html/
```

### 3. Configure Web Server

#### Apache (.htaccess)
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';"
```

#### Nginx
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name cybiont.com www.cybiont.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name cybiont.com www.cybiont.com;

    # SSL configuration
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    root /var/www/html;
    index index.html;

    # Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';";

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Environment-Specific Configurations

### Production Environment Variables
Create a `.env.production` file:
```env
VITE_API_URL=https://api.cybiont.com
VITE_ANALYTICS_ID=your-analytics-id
VITE_ENVIRONMENT=production
```

### Staging Environment
```env
VITE_API_URL=https://staging-api.cybiont.com
VITE_ANALYTICS_ID=your-staging-analytics-id
VITE_ENVIRONMENT=staging
```

## 📊 Performance Monitoring

### Core Web Vitals Targets
- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

### Monitoring Tools
1. **Google PageSpeed Insights**: Test performance scores
2. **GTmetrix**: Detailed performance analysis
3. **WebPageTest**: Advanced performance testing
4. **Lighthouse**: Built-in Chrome DevTools

### Performance Checklist
- [ ] Images are optimized and properly sized
- [ ] JavaScript and CSS are minified
- [ ] Gzip compression is enabled
- [ ] Browser caching is configured
- [ ] CDN is set up (if applicable)
- [ ] Critical CSS is inlined
- [ ] Non-critical resources are lazy-loaded

## 🔒 Security Checklist

### SSL/TLS Configuration
- [ ] SSL certificate is installed and valid
- [ ] HTTP redirects to HTTPS
- [ ] HSTS header is set
- [ ] TLS 1.2+ is enforced

### Security Headers
- [ ] Content-Security-Policy is configured
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection: 1; mode=block
- [ ] Referrer-Policy is set

### Form Security
- [ ] Input validation is implemented
- [ ] CSRF protection (if applicable)
- [ ] Rate limiting on form submissions
- [ ] Sanitization of user inputs

## 🌐 CDN Setup (Optional)

### Cloudflare Configuration
1. **Add Site**: Add cybiont.com to Cloudflare
2. **DNS Settings**: Update nameservers
3. **SSL/TLS**: Set to "Full (strict)"
4. **Caching**: Configure cache rules for static assets
5. **Security**: Enable security features

### AWS CloudFront
```json
{
  "Origins": [{
    "DomainName": "cybiont.com",
    "Id": "cybiont-origin",
    "CustomOriginConfig": {
      "HTTPPort": 443,
      "OriginProtocolPolicy": "https-only"
    }
  }],
  "DefaultCacheBehavior": {
    "TargetOriginId": "cybiont-origin",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "managed-caching-optimized"
  }
}
```

## 📱 Testing Checklist

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024, 1024x768)
- [ ] Mobile (375x667, 414x896, 360x640)

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard navigation
- [ ] Color contrast ratios
- [ ] ARIA labels and roles
- [ ] Focus management

### Performance Testing
- [ ] Page load speed < 3s
- [ ] Time to interactive < 5s
- [ ] Mobile performance score > 90
- [ ] Desktop performance score > 95

## 🚨 Troubleshooting

### Common Issues

#### 1. Assets Not Loading
```bash
# Check file permissions
chmod -R 644 /var/www/html/
chmod 755 /var/www/html/

# Check web server error logs
tail -f /var/log/apache2/error.log
# or
tail -f /var/log/nginx/error.log
```

#### 2. Form Submissions Not Working
- Verify CORS settings
- Check Content-Security-Policy headers
- Ensure HTTPS is properly configured

#### 3. Mobile Menu Not Working
- Check JavaScript console for errors
- Verify touch event handlers
- Test on actual mobile devices

### Performance Issues
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npx depcheck

# Optimize images
npx imagemin src/assets/images/* --out-dir=dist/assets/images/
```

## 📞 Support

If you encounter issues during deployment:

1. **Check Logs**: Review web server and application logs
2. **Test Locally**: Ensure the build works locally first
3. **Validate Configuration**: Double-check server configuration
4. **Contact Support**: Email hello@cybiont.com with details

## 🔄 Continuous Deployment

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to server
      run: |
        rsync -avz --delete dist/ ${{ secrets.SERVER_USER }}@${{ secrets.SERVER_HOST }}:/var/www/html/
```

This deployment guide ensures your Cybiont landing page is production-ready with optimal performance, security, and accessibility.
