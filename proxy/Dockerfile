FROM node:8
RUN npm install http-proxy --save

# Does not help ( Error: self signed certificate )
# RUN echo | \
#    openssl s_client \
#    -showcerts \
#    -servername self-signed.badssl.com \
#    -connect self-signed.badssl.com:443 2>/dev/null | \
#    awk '/-----BEGIN CERTIFICATE-----/, /-----END CERTIFICATE-----/' \
#    >> /usr/local/share/ca-certificates/self-signed.badssl.com.crt \
#    && \
#    update-ca-certificates

COPY app.js /home/node/app/app.js