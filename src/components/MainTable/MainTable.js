import MainRow from "../MainRow/MainRow";

const MainTable = () => {
  
  return (
    <table class="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">Инвойс №</th>
      <th scope="col">Откуда</th>
      <th scope="col">Куда</th>
      <th scope="col">Статус</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <MainRow/>
  </tbody>
</table>
  )
}

export default MainTable;
