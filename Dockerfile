FROM nginx:alpine

COPY . /usr/share/nginx/html

RUN rm -f /usr/share/nginx/html/index.php

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]