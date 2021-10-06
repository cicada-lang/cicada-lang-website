import { Pool } from "pg"

const pool = new Pool({
  user: "xyh",
  database: "summer",
})

async function test(): Promise<void> {
  const result = await pool.query("select * from posts;")
  console.log(result.rows)
  await pool.end()
}

test()
  .then(() => {
    process.exit()
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
