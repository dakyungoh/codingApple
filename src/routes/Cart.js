import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Cart() {
  let a = useSelector((state) => {
    return state.cart;
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.map((a, i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
