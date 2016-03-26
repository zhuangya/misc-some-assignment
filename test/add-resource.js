'use strict';

describe('cruise', function () {
  browser.get('http://localhost:3000');
  var currentResourceList = element.all(by.repeater('r in agent.resources track by $index'));

  it('should add a resource', function () {

    expect(currentResourceList.count()).toEqual(10);

    element.all(by.css('.specify-resources')).first().click();
    element.all(by.model('resources')).first().sendKeys('MacVim');
    element.all(by.css('.btn-append')).first().click();

    expect(currentResourceList.count()).toEqual(11);
  });

  it('should remove a resource', function () {
    element.all(by.css('button.resource-op')).get(4).click();
    expect(currentResourceList.count()).toEqual(10);
  });
});
