function Display({b,list,it,ul,c,delet}) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td 
                style={{
                  fontWeight: `${b ? 800: 300}`,
                  fontStyle: it ? "italic" : " ",
                  textDecoration: ul ? "underline" : " ",
                  color: c ? "blue" : "red",
                }}
              >
                {item}
              </td>
              <td>
                <input
                  type="button"
                  onClick={() =>  delet(i)}
                  value="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      .
    </div>
  );
}
export default Display;
