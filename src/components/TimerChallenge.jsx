export default function TimerChallenge({
    title,
    targetTime,
}) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : null}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>
            <p className="">
                Timer is runnig... / Timer inactive
            </p>
        </section>
    )
}