export function Technical() {
  return (
    <section className="technical" id="technical">
      <div className="container">
        <div className="section-head">
          <h2>Technical quick reference</h2>
          <p>A short guide for choosing between the two grades in this range.</p>
        </div>
        <div className="table-wrap">
          <table className="spec-table">
            <thead>
              <tr><th>Property</th><th>304 stainless</th><th>316 stainless</th></tr>
            </thead>
            <tbody>
              <tr><td>Typical use</td><td>Indoor, dry or light outdoor installs</td><td>Coastal, marine, chemical and wash-down areas</td></tr>
              <tr><td>Corrosion resistance</td><td>Good</td><td>Better, especially against chlorides</td></tr>
              <tr><td>Relative cost</td><td>Lower</td><td>Higher</td></tr>
              <tr><td>Magnetic response</td><td>Weakly magnetic when cold-worked</td><td>Non-magnetic in most conditions</td></tr>
            </tbody>
          </table>
        </div>
        <p className="note">Values are general guidance. Confirm the grade for your environment with our engineers before ordering.</p>
      </div>
    </section>
  );
}
