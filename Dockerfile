# Set the base image to ubuntu
FROM gblock0/greg-coffee_base:latest

ADD . /opt

RUN	rm -rf /opt/node_modules && \
		cp -r /tempNode/node_modules /opt/node_modules && \
		cd /opt && \
		webpack ./client/index.js ./public/app.js && \
		cp -r public/. /usr/share/nginx/html && \
		cp -f nginx.conf /etc/nginx/nginx.conf && \
		cp -f mime.types /etc/nginx/mime.types

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
