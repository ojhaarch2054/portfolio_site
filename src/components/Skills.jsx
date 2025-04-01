import React from "react";

const Skills = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Skills</h1>
      <div className="row">
        {/*fromntend*/}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Frontend</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-code-slash me-2"></i> JavaScript
                </li>
                <li className="list-group-item">
                  <i className="bi bi-code-slash me-2"></i> TypeScript
                </li>
                <li className="list-group-item">
                  <i className="bi bi-code-slash me-2"></i> React
                </li>
                <li className="list-group-item">
                  <i className="bi bi-filetype-html me-2"></i> HTML & CSS
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*backend*/}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Backend</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-server me-2"></i> Node.js
                </li>
                <li className="list-group-item">
                  <i className="bi bi-database me-2"></i> SQL & PostgreSQL
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*devops and tool*/}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">DevOps/Tools</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-terminal me-2"></i> Python
                </li>
                <li className="list-group-item">
                  <i className="bi bi-git me-2"></i> Git
                </li>
                <li className="list-group-item">
                  <i className="bi bi-linux me-2"></i> Linux
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*agile and design */}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Agile & Design</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-clipboard-data me-2"></i> Agile Methodology
                </li>
                <li className="list-group-item">
                  <i className="bi bi-file-earmark-image me-2"></i> Figma
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*professional*/}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Professional Skills</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-person-check me-2"></i> Teamwork
                </li>
                <li className="list-group-item">
                  <i className="bi bi-person-lines-fill me-2"></i> Collaboration
                </li>
                <li className="list-group-item">
                  <i className="bi bi-lightbulb me-2"></i> Problem Solving
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*language*/}
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 h-100 d-flex flex-column">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Languages</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="bi bi-translate me-2"></i> English
                </li>
                <li className="list-group-item">
                  <i className="bi bi-translate me-2"></i> Nepali
                </li>
                <li className="list-group-item">
                  <i className="bi bi-translate me-2"></i> Hindi
                </li>
                <li className="list-group-item">
                  <i className="bi bi-translate me-2"></i> Finnish
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
