/**
 * Your task in order to complete this Kata is to write a function which formats a duration,
 * given as a number of seconds, in a human-friendly way.
 *
 * The function must accept a non-negative integer.
 * If it is zero, it just returns "now".
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 */

function getYears(seconds) {
    return Math.floor(getDays(seconds) / 360)
}

function getDays(seconds) {
    return Math.floor(getHours(seconds) / 24)
}

function getHours(seconds) {
    return Math.floor(getMinutes(seconds) / 60)
}

function getMinutes(seconds) {
    return Math.floor(seconds / 60)
}

function durationToString(duration, unit) {
    let addition = ''

    switch (unit) {
        case 'year':
            addition = duration > 1 ? 'years' : 'year'
            break
        case 'day':
            addition = duration > 1 ? 'days' : 'day'
            break
        case 'hour':
            addition = duration > 1 ? 'hours' : 'hour'
            break
        case 'minute':
            addition = duration > 1 ? 'minutes' : 'minute'
            break
        case 'second':
            addition = duration > 1 ? 'seconds' : 'second'
            break
        default:
            addition = duration > 1 ? 'seconds' : 'second'
            break
    }

    return duration + ' ' + addition
}

function formatDuration(seconds) {
    if (!seconds) return 'now';

    const years = getYears(seconds)
    const days = getDays(seconds) % 365
    const hours = getHours(seconds) % 24
    const minutes = getMinutes(seconds) % 60
    const lastSeconds = seconds % 60

    const timeComponents = [
        { value: years, unit: 'year' },
        { value: days, unit: 'day' },
        { value: hours, unit: 'hour' },
        { value: minutes, unit: 'minute' },
        { value: lastSeconds, unit: 'second' },
    ]

    const nonZeroComponents = timeComponents.filter(({ value }) => value > 0)

    const formattedComponents = nonZeroComponents.map(
        ({ value, unit }, index) => {
            const hasBiggerValue = index > 0
            const formattedValue = durationToString(value, unit)
            return (
                (hasBiggerValue && index === nonZeroComponents.length - 1
                    ? 'and '
                    : '') + formattedValue
            )
        }
    )

    return formattedComponents.join(', ').replace(/, and /, ' and ');
}

console.log(formatDuration(1)) // 1 second
console.log(formatDuration(62)) // 1 minute and 2 seconds
console.log(formatDuration(120)) // 2 minutes
console.log(formatDuration(3600)) // 1 hour
