class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time && callback) {
            this.alarmCollection.push({time, callback, canCall: true});
            if (this.alarmCollection.every(alarm => alarm.time !== time)) {
                console.warn('Уже присутствует звонок на это же время');
            }
        } else {
            throw new Error('Отсутствуют обязательные аргументы');
        }
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    if (this.getCurrentFormattedTime() === alarm.time && alarm.canCall) {
                        alarm.callback();
                        alarm.canCall = false;
                    }
                });
            }, 1000);
        } else {
            console.warn('Будильник уже запущен');
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        this.resetAllCalls();
    }
}