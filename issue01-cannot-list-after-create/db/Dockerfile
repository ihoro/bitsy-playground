FROM tinkerpop/gremlin-server:3.4.9

COPY bitsy /opt/gremlin-server/ext/bitsy/plugin/
COPY gremlin-server/* /opt/gremlin-server/conf/

USER root
RUN chown -R gremlin:gremlin /opt/gremlin-server
RUN mkdir /bitsy-data && chown gremlin:gremlin /bitsy-data
