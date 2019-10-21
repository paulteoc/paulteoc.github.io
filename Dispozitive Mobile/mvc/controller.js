class t_eq2_controller{
    view;
    model;
    constructor(view, model)
    {
        this.view = view;
        this.model = model;

        // creiem o lista de functii
        var events = new t_events();
        // adaugam on_solve(din contriller) in lista de functii
        events.add_event("on_solve_clicked_uab", this.on_solve);
        //transmitem lista de functii la view
        this.view.set_events(events);
    }
    on_solve()
    {
       var a = this.viwe.get_a();
       var b = this.viwe.get_b();
       var c = this.viwe.get_c();

        this.model.set_coefficients(a , b , c);
        this.model.solve();
        var solutions = this.model.get_solutions();

        this.view.set_solutions_para(solutions);
    }
}

var app = new t_eq2_controller (new t_eq2_view(), new t_eq2_model());