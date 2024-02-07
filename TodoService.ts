async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/app/api/todo/get'); // APIのエンドポイントを指定
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json(); // レスポンスをJSON形式に変換
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // エラーを再スローするか、適切に処理する
    }
}

// fetchData関数を実行してデータを取得
fetchData();
