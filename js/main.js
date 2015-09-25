/**
 * Created by sakariruoho on 9/17/15.
 */
$('#datepickah').datepicker({startView: 'decade', orientation: 'right', forceParse: false, autoclose: true})
    .on('changeDate', function (ev) {
        console.log("date changed" + pad(ev.date.getDate()));
        document.getElementById('date').setAttribute('value', pad(ev.date.getDate()));
    })
    .on('changeYear', function (ev) {
        console.log("year changed: " + ev.date.getFullYear());
        document.getElementById('year').setAttribute('value', ev.date.getFullYear());
    })
    .on('changeMonth', function (ev) {
        console.log("month changed: " + pad(ev.date.getMonth()));
        document.getElementById('month').setAttribute('value', pad((ev.date.getMonth() + 1)));
    }
);

function pad(number) {
    return (number < 10) ? '0' + number : number;
}