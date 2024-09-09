import { Link } from "react-router-dom";
import styled from "styled-components";

const Maintenance = () => {
  return (
    <MaintenanceWrapper className="section">
      <div className="container text-center">
        <p className="value-404">oh snap!</p>
        <p className="not-found-text text-uppercase text-white">under construction, sorry for this</p>
        <Link to="/" className="section-btn">go to homepage</Link>
      </div>
    </MaintenanceWrapper>
  )
}

export default Maintenance;

const MaintenanceWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
  .value-404{
    font-size: 60px;
    font-weight: 800;
    color: var(--clr-green-normal);
  }
  .not-found-text{
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .section-btn{
    display: inline-block;
    margin-top: 18px;
  }
`;
