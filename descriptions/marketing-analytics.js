// Edit the HTML between the two backticks below.
// Use <p> for each paragraph and <ul><li>...</li></ul> for bullet points.
window.portfolioDescriptions = window.portfolioDescriptions || {};
window.portfolioDescriptions[0] = `

  <h3>Project Overview</h3>

  <p>
    I simulated a subscription business that offers guitar lessons and has several ongoing marketing campaigns. For added realism, I built my own data source (a FastAPI application) that updates daily and includes trends, randomness, and data quality issues. Then, I built an ELT pipeline from scratch that automatically extracts raw data from the API, validates and saves it in an S3 bucket, copies it to the PostgreSQL database's staging tables, cleans it using version-controlled SQL queries, and then moves it to its final location (the "analytics" tables). I used GitHub Actions workflows for automation.
  </p>

  <p>
    During the build, I used Git for version control and followed a standard feature-branch and pull-request workflow. I also developed an automated test suite, which I ran before pushing branches and merging pull requests to verify that the changes did not break existing functionality.
  </p>

  <p>
    The database runs on PostgreSQL and is hosted on Amazon RDS. It includes report-facing SQL views, which exclude ineligible records and aggregate the data to the required reporting grain. Those views then feed into the interactive Power BI report.
  </p>

  <p>
    This pipeline follows several best practices, including:
  </p>
  <ul>
    <li>atomic, incremental loading transactions</li>
    <li>strict schema enforcement</li>
    <li>validated type conversion</li>
    <li>separation of concerns</li>
    <li>idempotent processes</li>
  </ul>
  <p>
  </p>

  <p>
    The Power BI report's semantic model follows star schema design principles; it uses single-direction filter relationships to connect dimension tables to fact tables. It also includes a marked date table, which frees up space and makes it easy to filter multiple tables by date simultaneously. All visuals in the report contain explicit measures (written in DAX) which are carefully organized in display folders.  
  </p>

  <dl>
    <dt>Deliverables</dt>
    <dd>Ingestion and loading scripts, version-controlled SQL queries, Power BI report design</dd>
    <dt>Tools</dt>
    <dd>Python, PostgreSQL, AWS, GitHub Actions, Power BI</dd>
  </dl>
`;
