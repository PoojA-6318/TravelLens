class TravelEngine {
    constructor(destinations) {
        this.destinations = destinations;
    }

    rankDestinations(selectedMood, userBudget) {

        userBudget = Number(userBudget);

        return this.destinations.map(place => {

            let score = 0;

            // 1️⃣ Theme Match (40%)
            if (place.themes.includes(selectedMood)) {
                score += 40;
            }

            // 2️⃣ Budget Fit (25%)
            const avgMidBudget = place.budget.mid || place.budget.low;
            const budgetDifference = Math.abs(avgMidBudget - userBudget);
            const budgetScore = Math.max(0, 25 - (budgetDifference / 300));
            score += budgetScore;

            // 3️⃣ Popularity (15%)
            score += (place.popularity / 10) * 15;

            // 4️⃣ Crowd Inverse (10%)
            score += ((10 - place.crowdLevel) / 10) * 10;

            // 5️⃣ Mood-Specific Bonus (10%)
            if (selectedMood === "Adventure") {
                score += (place.adventureLevel / 10) * 10;
            }
            if (selectedMood === "Spiritual") {
                score += (place.spiritualLevel / 10) * 10;
            }
            if (selectedMood === "Party") {
                score += (place.partyLevel / 10) * 10;
            }

            return {
                ...place,
                score: score.toFixed(1)
            };

        }).sort((a, b) => b.score - a.score);
    }
}