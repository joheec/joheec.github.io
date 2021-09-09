import React from 'react';
import Popup from '../../Popup';
import './styles.css';

const Tech = () => {
  return <div>
    <h1>Codespaces Script Setup</h1>
    <a
      className="docs-link"
      href="https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts"
      target="_blank"
      rel="noopener noreferrer"
    >Lifecyc Scripts Docs</a>
    <p>
      In my onCreateCommand script, I am cloning the repos my project needs to replicate the entire system.
      Then I create a docker registry to utilize k3d.
      I am only cloning on container creation because I don't want changes in other repos to unexpectedly break the current work.
      Best Practice
      postCreateCommand's post-install.sh should run apt-update / upgrade
      postStartCommand's post-start.sh should pull base docker images
    </p>

    <h1>k3d from Rancher</h1>
    <p>
      need local registry to push locally created docker image
    </p>

    <h1>Container Base Image</h1>
    <p>
      <a className="docs-link" href="https://nickjanetakis.com/blog/benchmarking-debian-vs-alpine-as-a-base-docker-image" target="_blank" rel="noopener noreferrer">Deciding between alpine vs debian</a>
    </p>

    <h1>Use Label from Multi-Stage Build</h1>
    <p>
      <a className="docs-link" href="https://forums.docker.com/t/tag-intermediate-build-stages-multi-stage-build/34795/2" target="_blank" rel="noopener noreferrer">Multi-Stage build label to use specific image in container</a>
    </p>
    <h1>Kubernetes</h1>
    <p>
      Why you may want secondary containers in a single pod (composite containers)
      <ul>
        <li>Sidecar Concept - handles logging or enhance the primary</li>
        <li>Ambassador concept - acts a proxy to the outside</li>
        <li>Adapter - modifies data to meet an external format</li>
      </ul>
    </p>
  </div>
};

export default Popup(Tech)('/tech');
