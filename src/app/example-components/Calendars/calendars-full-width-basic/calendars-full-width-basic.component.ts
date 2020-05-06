import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
    CalendarEvent,
    CalendarView
} from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { colors } from './colors';

@Component({
  selector: 'app-calendars-full-width-basic',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './calendars-full-width-basic.component.html',
})

export class CalendarsFullWidthBasicComponent {

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
        {
            title: 'No event end date',
            start: setHours(setMinutes(new Date(), 0), 3),
            color: colors.blue
        },
        {
            title: 'No event end date',
            start: setHours(setMinutes(new Date(), 0), 5),
            color: colors.yellow
        }
    ];

    setView(view: CalendarView) {
        this.view = view;
    }

}
