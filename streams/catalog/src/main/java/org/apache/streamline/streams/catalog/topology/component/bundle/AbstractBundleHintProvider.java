package org.apache.streamline.streams.catalog.topology.component.bundle;

import org.apache.streamline.streams.catalog.Cluster;
import org.apache.streamline.streams.catalog.Namespace;
import org.apache.streamline.streams.catalog.NamespaceServiceClusterMapping;
import org.apache.streamline.streams.catalog.exception.ClusterNotFoundException;
import org.apache.streamline.streams.catalog.service.EnvironmentService;
import org.apache.streamline.streams.catalog.service.StreamCatalogService;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

public abstract class AbstractBundleHintProvider implements ComponentBundleHintProvider {

    protected EnvironmentService environmentService;

    @Override
    public void init(EnvironmentService environmentService) {
        this.environmentService = environmentService;
    }

    @Override
    public Map<String, Map<String, Object>> provide(Namespace namespace) {
        Map<String, Map<String, Object>> hintMap = new HashMap<>();

        Collection<NamespaceServiceClusterMapping> serviceMappings = environmentService.listServiceClusterMapping(
                namespace.getId(), getServiceName());
        for (NamespaceServiceClusterMapping mapping : serviceMappings) {
            Long clusterId = mapping.getClusterId();
            Cluster cluster = environmentService.getCluster(clusterId);
            if (cluster == null) {
                throw new RuntimeException(new ClusterNotFoundException(clusterId));
            }

            hintMap.put(cluster.getName(), getHintsOnCluster(cluster));
        }

        return hintMap;
    }

    public abstract Map<String, Object> getHintsOnCluster(Cluster cluster);

    public abstract String getServiceName();
}
