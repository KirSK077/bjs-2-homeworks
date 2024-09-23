class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        } else if (this.intervalId) {
            this.stop();
        }
        this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
    }

    start() {
        if (this.intervalId) {
            console.warn('Будильник уже запущен');
            return;
        }

        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (this.getCurrentFormattedTime() === alarm.time && alarm.canCall) {
                    alarm.callback();
                    alarm.canCall = false;
                }
            });
        }, 1000);
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
    }
}