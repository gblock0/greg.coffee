# Set the base image to ubuntu
FROM ubuntu:14.04

# Install Node.js & other dependencies
RUN mkdir -p /var/log/supervisor && \ 
		mkdir -p /logs && \
		mkdir -p /tempNode && \
		mkdir -p /opt

ADD package.json /tempNode/package.json
ADD . /opt

RUN apt-get update && \
		apt-get -y install curl wget git supervisor build-essential && \
		apt-get -y install sudo && \
		apt-get -y install libkrb5-dev && \
		curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - && \
		apt-get -y install python vim gcc make nodejs && \
		apt-get -y install 	ca-certificates nginx gettext-base && \
		npm install -g node-gyp && \
		node-gyp clean && \
		ln -sf /dev/stdout /var/log/nginx/access.log && \
		ln -sf /dev/stderr /var/log/nginx/error.log && \
		cd /tempNode && \
		rm -rf node_modules && \
		npm install && \
		npm install -g webpack && \
		rm -rf /opt/node_modules && \
		cp -r /tempNode/node_modules /opt/node_modules && \
		cd /opt && \
		webpack ./client/index.js ./public/app.js && \
		cp -r public/. /usr/share/nginx/html && \
		cp -f nginx.conf /etc/nginx/nginx.conf && \
		cp -f mime.types /etc/nginx/mime.types

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
