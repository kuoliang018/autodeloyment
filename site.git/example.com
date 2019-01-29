server {
	listen 8082 default_server;
        listen [::]:8082 default_server;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

	location / {
                try_files $uri.html $uri/ @extensionless-php;
        }
        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
        }

	location @extensionless-php {
		rewrite ^(.*)$ $1.php last;
	}

        location ~ /\.ht {
                deny all;
        }
}
