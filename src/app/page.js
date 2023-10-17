import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const teams = [
    {
      teamName: "Me1",
      goalsScored: 5+9,
      goalsFaced: 1+1,
      wins:1+1,
      draw:0,
      loss:0,
      
    },
    {
      teamName: "Me2",
      goalsScored: 1+1,
      goalsFaced: 5+2,
      wins:0,
      draw:0,
      loss:1+1,
    
    },
    {
      teamName: "Csb",
      goalsScored: 2+1,
      goalsFaced: 1+9,
      wins:1,
      draw:0,
      loss:0+1,
    },
    {
      teamName: "Csa",
      goalsScored: 4+2,
      goalsFaced: 5+1,
      wins:0+1,
      draw:0,
      loss:1,
    
    },
    {
      teamName: "Csc",
      goalsScored: 1+2,
      goalsFaced: 2+2,
      wins:0,
      draw:0+1,
      loss:1,
    
    },
    {
      teamName: "Cbs",
      goalsScored: 5+2,
      goalsFaced: 1+2,
      wins:1,
      draw:0+1,
      loss:0,
    
    },
    {
      teamName: "Eca",
      goalsScored: 0+1,
      goalsFaced: 1+6,
      wins:0,
      draw:0,
      loss:1+1,
    
    },
    {
      teamName: "Ecb",
      goalsScored: 1+0,
      goalsFaced: 0+1,
      wins:1,
      draw:0,
      loss:0+1,
    
    },
    {
      teamName: "Eb",
      goalsScored: 1+1,
      goalsFaced: 5,
      wins:0+1,
      draw:0,
      loss:1,
    
    },
    {
      teamName: "Eee",
      goalsScored: 5+6,
      goalsFaced: 4+1,
      wins:1+1,
      draw:0,
      loss:0,
    
    },
  ];
  teams.forEach(team => {
    team.played = team.wins + team.draw + team.loss;
    team.pts = 3 * team.wins + team.draw;
    team.goaldiff = team.goalsScored - team.goalsFaced;
  });

  teams.sort((a, b) => {
    // Sort by pts in descending order
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }
    // If pts are equal, sort by goaldiff in descending order
    return b.goaldiff - a.goaldiff;
  });
  return (
    <div className={styles.main}>
      <div className={styles.first}>
      <iframe src='https://my.spline.design/untitled-0f82f716fb6553fdff354245b95229c2/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
    <div className={styles.point}>
      <h1>POINT TABLE</h1>
    </div>
    <div className={styles.thing}>
     <div>
      <h3>Tm</h3>
     </div>
     <div>
      <h3>GP</h3>
     </div>
     <div>
      <h3>W</h3>
     </div>
     <div>
      <h3>D</h3>
     </div>
     <div>
      <h3>L</h3>
     </div>
     <div>
      <h3>GF</h3>
     </div>
     <div>
      <h3>GA</h3>
     </div>
     <div>
      <h3>GD</h3>
     </div>
     <div>
      <h3>PT</h3>
     </div>

    </div>
    {teams.map((team, index) => (
     
        <div key={team.teamName} className={styles.table}>
          <div className={styles.content}>
            {`${team.teamName}`}
          </div>

          <div className={styles.content}>
            {`${team.played}`}
          </div>
          <div className={styles.content}>
            {`${team.wins}`}
          </div>

          <div className={styles.content}>
            {`${team.draw}`}
          </div>

          <div className={styles.content}>
            {`${team.loss}`}
          </div>

          <div className={styles.content}>
            {`${team.goalsScored}`}
          </div>

          <div className={styles.content}>
            {`${team.goalsFaced}`}
          </div>


          <div className={styles.content}>
            {`${team.goaldiff}`}
          </div>

          <div className={styles.content}>
            {`${team.pts}`}
          </div>

         
        </div>
   
    ))}
  </div>
);
}
