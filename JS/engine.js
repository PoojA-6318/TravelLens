class TravelEngine {

    constructor(data) {
        this.data = data;
    }

    calculateMoodScore(item, selectedMood) {
        return item.category === selectedMood ? 10 : 5;
    }

    calculateBudgetScore(itemCost, userBudget) {
        if (!userBudget) return 5;
        return itemCost <= userBudget ? 10 : 3;
    }

    calculateWeatherScore() {
        // Placeholder until weather API is connected
        return 7;
    }

    calculateFinalScore(item, selectedMood, userBudget) {

        const moodScore = this.calculateMoodScore(item, selectedMood);

        // FIXED HERE
        const budgetScore = this.calculateBudgetScore(item.budget_level * 100, userBudget);

        const weatherScore = this.calculateWeatherScore();
        const popularityScore = item.popularity;

        const finalScore =
            (0.35 * moodScore) +
            (0.25 * weatherScore) +
            (0.20 * budgetScore) +
            (0.20 * popularityScore);

        return finalScore.toFixed(2);
    }

    rankDestinations(selectedMood, userBudget) {

        return this.data.map(item => {
            return {
                ...item,
                score: this.calculateFinalScore(item, selectedMood, userBudget)
            };
        }).sort((a, b) => b.score - a.score);
    }

    updateCollectiveIntel(selectedCategory) {
        let stats = JSON.parse(localStorage.getItem('categoryInterests')) || {};
        stats[selectedCategory] = (stats[selectedCategory] || 0) + 1;
        localStorage.setItem('categoryInterests', JSON.stringify(stats));
    }

    getRecommendedCategory() {
        let stats = JSON.parse(localStorage.getItem('categoryInterests')) || {};
        // Returns the category with the most clicks
        return Object.keys(stats).reduce((a, b) => stats[a] > stats[b] ? a : b, 'Relaxed');
    }

}
