export const StatisticsList = ({ data }) => {
  return (<ul class="stat-list">
    {data.map(el => (<li key={el.id} class="item">
    <span class="label">{el.label}</span>
    <span class="percentage">{el.percentage}</span>
    </li>))}
  </ul>)
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // <ul class="stat-list"> {data.map(el => (  <li class="item">
    //   <span class="label">.docx</span>
    //   <span class="percentage">4%</span>
    // </li>
    // <li class="item">
    //   <span class="label">.mp3</span>
    //   <span class="percentage">14%</span>
    // </li>
    // <li class="item">
    //   <span class="label">.pdf</span>
    //   <span class="percentage">41%</span>
    // </li>
    // <li class="item">
    //   <span class="label">.mp4</span>
    //   <span class="percentage">12%</span>
    // </li>))} </ul>)};
