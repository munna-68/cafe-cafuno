import { useState, useRef } from 'react'
import Footer from '../components/Footer'
import './Reserve.css'

const BOUTIQUES = [
  'SoHo — Prince Street',
  'Tribeca — Franklin Street',
  'Upper East Side — Madison Ave',
  'Brooklyn — Williamsburg',
  'Chelsea — 10th Avenue'
]

const HOURS = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM'
]

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8]

function validate(values, month, day, year) {
  const errors = {}
  if (!values.boutique) {
    errors.boutique = 'Select a boutique'
  }
  const dateStr = month && day && year
    ? `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`
    : ''
  if (!dateStr) {
    errors.date = 'Select a date'
  } else {
    const parsed = new Date(dateStr)
    if (isNaN(parsed.getTime())) {
      errors.date = 'Enter a valid date'
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      parsed.setHours(0, 0, 0, 0)
      if (parsed < today) {
        errors.date = 'Must be today or later'
      }
    }
  }
  if (!values.hour) {
    errors.hour = 'Select a time'
  }
  if (!values.guests) {
    errors.guests = 'Select number of guests'
  }
  return errors
}

export default function Reserve() {
  const [values, setValues] = useState({
    boutique: '',
    hour: '',
    guests: '',
    notes: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const [dateMonth, setDateMonth] = useState('')
  const [dateDay, setDateDay] = useState('')
  const [dateYear, setDateYear] = useState('')

  const monthRef = useRef(null)
  const dayRef = useRef(null)
  const yearRef = useRef(null)
  const hiddenDateRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleMonthChange = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 2)
    setDateMonth(v)
    if (v.length === 2) dayRef.current?.focus()
    if (errors.date) setErrors(prev => { const n = { ...prev }; delete n.date; return n })
  }

  const handleDayChange = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 2)
    setDateDay(v)
    if (v.length === 2) yearRef.current?.focus()
    if (errors.date) setErrors(prev => { const n = { ...prev }; delete n.date; return n })
  }

  const handleYearChange = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 4)
    setDateYear(v)
    if (errors.date) setErrors(prev => { const n = { ...prev }; delete n.date; return n })
  }

  const handleMonthKeyDown = (e) => {
    if (e.key === 'Backspace' && dateMonth === '') {
      e.preventDefault()
    }
  }

  const handleDayKeyDown = (e) => {
    if (e.key === 'Backspace' && dateDay === '') {
      monthRef.current?.focus()
    }
  }

  const handleYearKeyDown = (e) => {
    if (e.key === 'Backspace' && dateYear === '') {
      dayRef.current?.focus()
    }
  }

  const handleCalendarClick = () => {
    hiddenDateRef.current?.showPicker()
  }

  const handleNativeDateChange = (e) => {
    if (e.target.value) {
      const [y, m, d] = e.target.value.split('-')
      setDateMonth(m)
      setDateDay(d)
      setDateYear(y)
      monthRef.current?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values, dateMonth, dateDay, dateYear)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="reserve">
        <section className="reserve__main">
          <div className="reserve__title-area">
            <h1 className="reserve__title">Reserve a Moment</h1>
            <p className="reserve__desc">
              Secure your place in our atmosphere. A curated experience of
              architectural warmth and exceptional espresso, prepared
              exclusively for you.
            </p>
          </div>
          <div className="reserve__grid">
            <div className="reserve__col-left">
              <div className="reserve__image-wrap">
                <img
                  src="/assets/astmosphere1.jpg"
                  alt="Cafuno Interior"
                  className="reserve__image"
                />
              </div>
              <div className="reserve__quote-wrap">
                <div className="reserve__quote-border">
                  <div className="reserve__quote-content">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="reserve__quote-text">
                      &ldquo;The ritual of coffee, elevated by space and silence.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reserve__col-right">
              <div className="reserve__form-shadow" />
              <div className="reserve__form">
                <div className="reserve__success">
                  <div className="reserve__success-icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="reserve__success-label">SUCCESS</span>
                  <p className="reserve__success-desc">
                    Your reservation has been confirmed. We look forward to welcoming you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="reserve">
      <section className="reserve__main">
        <div className="reserve__title-area">
          <h1 className="reserve__title">Reserve a Moment</h1>
          <p className="reserve__desc">
            Secure your place in our atmosphere. A curated experience of
            architectural warmth and exceptional espresso, prepared
            exclusively for you.
          </p>
        </div>

        <div className="reserve__grid">
          <div className="reserve__col-left">
            <div className="reserve__image-wrap">
              <img
                src="/assets/astmosphere1.jpg"
                alt="Cafuno Interior"
                className="reserve__image"
              />
            </div>
            <div className="reserve__quote-wrap">
              <div className="reserve__quote-border">
                <div className="reserve__quote-content">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="reserve__quote-text">
                    &ldquo;The ritual of coffee, elevated by space and silence.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reserve__col-right">
            <div className="reserve__form-shadow" />
            <form className="reserve__form" onSubmit={handleSubmit} noValidate>
              <div className="reserve__field">
                <label className="reserve__label">SELECT BOUTIQUE</label>
                <div className="reserve__select">
                  <select
                    name="boutique"
                    value={values.boutique}
                    onChange={handleChange}
                    className="reserve__select-el"
                  >
                    <option value="" disabled>Choose a location</option>
                    {BOUTIQUES.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                  <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </div>
                {errors.boutique && <span className="reserve__error">{errors.boutique}</span>}
              </div>

              <div className="reserve__row">
                <div className="reserve__field">
                  <label className="reserve__label">DATE</label>
                  <div className="reserve__input reserve__date-group">
                    <input
                      type="text"
                      className="reserve__date-segment"
                      placeholder="MM"
                      maxLength={2}
                      inputMode="numeric"
                      value={dateMonth}
                      onChange={handleMonthChange}
                      onKeyDown={handleMonthKeyDown}
                      ref={monthRef}
                    />
                    <span className="reserve__date-sep">/</span>
                    <input
                      type="text"
                      className="reserve__date-segment"
                      placeholder="DD"
                      maxLength={2}
                      inputMode="numeric"
                      value={dateDay}
                      onChange={handleDayChange}
                      onKeyDown={handleDayKeyDown}
                      ref={dayRef}
                    />
                    <span className="reserve__date-sep">/</span>
                    <input
                      type="text"
                      className="reserve__date-segment reserve__date-segment--year"
                      placeholder="YYYY"
                      maxLength={4}
                      inputMode="numeric"
                      value={dateYear}
                      onChange={handleYearChange}
                      onKeyDown={handleYearKeyDown}
                      ref={yearRef}
                    />
                    <button
                      type="button"
                      className="reserve__date-cal"
                      onClick={handleCalendarClick}
                      aria-label="Open calendar"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </button>
                    <input
                      type="date"
                      ref={hiddenDateRef}
                      onChange={handleNativeDateChange}
                      className="reserve__date-native"
                      aria-hidden="true"
                      tabIndex={-1}
                    />
                  </div>
                  {errors.date && <span className="reserve__error">{errors.date}</span>}
                </div>
                <div className="reserve__field">
                  <label className="reserve__label">HOUR</label>
                  <div className="reserve__select">
                    <select
                      name="hour"
                      value={values.hour}
                      onChange={handleChange}
                      className="reserve__select-el"
                    >
                      <option value="" disabled>Choose a time</option>
                      {HOURS.map(h => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                    <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 1l5 5 5-5" />
                    </svg>
                  </div>
                  {errors.hour && <span className="reserve__error">{errors.hour}</span>}
                </div>
              </div>

              <div className="reserve__field">
                <label className="reserve__label">GUESTS</label>
                <div className="reserve__select">
                  <select
                    name="guests"
                    value={values.guests}
                    onChange={handleChange}
                    className="reserve__select-el"
                  >
                    <option value="" disabled>Number of guests</option>
                    {GUEST_OPTIONS.map(g => (
                      <option key={g} value={g}>{g} {g === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                  <svg className="reserve__select-arrow" width="12" height="7" viewBox="0 0 12 8" fill="none" stroke="#7b776e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5 5-5" />
                  </svg>
                </div>
                {errors.guests && <span className="reserve__error">{errors.guests}</span>}
              </div>

              <div className="reserve__field">
                <label className="reserve__label">NOTES (OPTIONAL)</label>
                <textarea
                  name="notes"
                  className="reserve__textarea"
                  placeholder="Any special requests?"
                  rows={1}
                  value={values.notes}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="reserve__submit">
                <span>CONFIRM RESERVATION</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1b1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <p className="reserve__footnote">
                Reservations are held for 15 minutes.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
