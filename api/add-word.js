const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { word, meaning, example, level } = req.body;

  if (!word || !meaning) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const { error } = await supabase
    .from('words')
    .insert([{ word, meaning, example, level }]);

  if (error) return res.status(500).json({ error });

  return res.status(200).json({ status: 'ok' });
};
