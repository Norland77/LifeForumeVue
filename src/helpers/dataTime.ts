export function calculateTime(createdAt: string) {
    const dateCreated = Date.parse(createdAt);
    const dateNow = Date.now();
    const topicDate = new Date(dateCreated);
    const myDate = new Date(dateNow);

    const topicDay = timeToTwoCharacter(topicDate.getDate().toString());
    const topicMonth = timeToTwoCharacter((topicDate.getMonth() + 1).toString());
    const topicHours = timeToTwoCharacter(topicDate.getHours().toString());

    const timeOfTopic = `${topicHours}:${timeToTwoCharacter(topicDate.getMinutes().toString())}`;

    const diffInMilliseconds = dateNow - dateCreated;
    const diffInMinutes = diffInMilliseconds / (1000 * 60);
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    if (diffInDays < 1) {
        if (diffInHours < 1) {
            if (diffInMinutes < 1) {
                return "Тільки що";
            }
            return `${Math.floor(diffInMinutes)} хв. тому`;
        }
        return `${Math.floor(diffInHours)} год. тому`;
    }

    const myDay = timeToTwoCharacter(myDate.getDate().toString());
    const myMonth = timeToTwoCharacter((myDate.getMonth() + 1).toString());

    if (topicDay + topicMonth === myDay + myMonth) {
        return `Сьогодні о ${timeOfTopic}`;
    } else if (timeToTwoCharacter((topicDate.getDate() + 1).toString()) + topicMonth === myDay + myMonth) {
        return `Вчора о ${timeOfTopic}`;
    } else if (timeToTwoCharacter((topicDate.getDate() + 2).toString()) + topicMonth === myDay + myMonth) {
        return `Позавчора о ${timeOfTopic}`;
    } else {
        return `${topicDay}.${topicMonth} о ${timeOfTopic}`;
    }
}

export function timeToTwoCharacter(word: string) {
    return word.padStart(2, "0");
}