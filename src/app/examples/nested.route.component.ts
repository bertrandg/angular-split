import { Component } from '@angular/core'


@Component({
  selector: 'sp-ex-nested',
  styles: [`
    :host {
        display: block;
        width: 100%;
        margin: 50px 0;
    }
  `],
  template: `
    <div class="container">
        <h4>Multiple nested split</h4>
        <div class="split-example" style="height: 600px;">
            <split direction="horizontal">
                <split-area [size]="40">
                    <split direction="vertical">
                        <split-area>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </split-area>
                        <split-area>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </split-area>
                        <split-area>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </split-area>
                    </split>
                </split-area>
                <split-area [size]="60">
                    <split direction="vertical">
                        <split-area [size]="25">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </split-area>
                        <split-area [size]="75">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eodolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </split-area>
                    </split>
                </split-area>
            </split>
        </div>
        <br><br>
        <pre [innerText]="code"></pre>
    </div>`
})
export class NestedComponent {
    code: string = `<split direction="horizontal">
    <split-area [size]="40">
        <split direction="vertical">
            <split-area>
                <p>Lorem ipsum dolor sit amet...</p>
            </split-area>
            <split-area>
                <p>Sed ut perspiciatis unde omnis iste natus erro...</p>
            </split-area>
            <split-area>
                <p>Lorem ipsum dolor sit amet...</p>
            </split-area>
        </split>
    </split-area>
    <split-area [size]="60">
        <split direction="vertical">
            <split-area [size]="25">
                <p>Lorem ipsum dolor sit amet...</p>
            </split-area>
            <split-area [size]="75">
                <p>Sed ut perspiciatis unde omnis iste natus erro...</p>
            </split-area>
        </split>
    </split-area>
</split>`

}