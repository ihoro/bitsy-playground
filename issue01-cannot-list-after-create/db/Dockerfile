FROM tinkerpop/gremlin-server:3.4.9

COPY bitsy /opt/gremlin-server/ext/bitsy/plugin/
COPY gremlin-server/* /opt/gremlin-server/conf/

USER root
RUN chown -R gremlin:gremlin /opt/gremlin-server
RUN mkdir /bitsy-data && chown gremlin:gremlin /bitsy-data

# RUN apk add openjdk11 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN apk add openjdk9 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
ENV JAVA_HOME=/usr/lib/jvm/java-9-openjdk
