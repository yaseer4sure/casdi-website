import { organisation } from "../../data/organisation.js";

export default function OrganisationDetails() {
  return (
    <div className="organisation-details">
      <p><strong>Registration number:</strong> {organisation.registrationNumber}</p>
      <address><strong>Physical address:</strong> {organisation.address}</address>
      <p><a href={organisation.website}>climateasdi.org</a> is the official website of {organisation.name} (CASDI), which owns and operates this domain.</p>
    </div>
  );
}
