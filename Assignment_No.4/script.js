// Bar Chart - Subject Performance
const barChart = new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["Math", "Science", "English", "Computer", "History"],
        datasets: [{
            label: "Average Marks",
            data: [85, 78, 82, 90, 70],
            backgroundColor: [
                "#3b82f6",
                "#10b981",
                "#f59e0b",
                "#ef4444",
                "#8b5cf6"
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Line Chart - Monthly Progress
const lineChart = new Chart(document.getElementById("lineChart"), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Average Score",
            data: [65, 70, 75, 80, 78, 85],
            borderColor: "#3b82f6",
            fill: false,
            tension: 0.4
        }]
    }
});

// Pie Chart - Score Distribution
const pieChart = new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: ["Excellent", "Good", "Average", "Poor"],
        datasets: [{
            data: [30, 40, 20, 10],
            backgroundColor: [
                "#22c55e",
                "#3b82f6",
                "#facc15",
                "#ef4444"
            ]
        }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
}
});