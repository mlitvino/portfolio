FROM caddy:2.11-alpine
COPY deploy/Caddyfile /etc/caddy/Caddyfile
COPY dist /srv
