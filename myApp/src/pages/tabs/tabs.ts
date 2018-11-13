import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { OpencamPage } from '../opencam/opencam';

@Component({
  templateUrl: 'tabs.html',
  selector: 'tabs-page',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = ConfiguracoesPage;
  tab4Root = OpencamPage;

  constructor() {

  }
}
