/**
* timbles.js
* definitely the most lightweight jquery table plugin ever
* @author jenn schiffer http://jennmoney.biz
*/

(function($) {

  var pluginName = 'timbles';

  var defaults = {
    sortKey : null,
    sortOrder : null,
  };

  var classes = {
    headerRow : 'timbles-header',
    rowEven : 'even',
    rowOdd : 'odd'
  };
  
  var methods = {

    /** initialize timble, er, i mean table **/
    init : function(opts) {
      return this.each(function() {
        var $this = $(this).addClass(pluginName);
        var options = $.extend({}, defaults, opts);
        data = {
          $this : $this,
          sorting: options.sorting,
          sortById: options.sortById,
          sortByOrder: options.sortByOrder,
          sortAttr: options.sortAttr
        };

        // save all rows to data
        data.$allRows = $this.find('tr');
        data.$headerRow = $this.find('tr').eq(0).addClass(classes.headerRow);
        data.$records = $this.find('tr').not('.'+classes.headerRow);

        // save all this great new data wowowow
        $this.data(pluginName, data);

        // add even/odd classes to records
        data.$records.filter(':odd').addClass(classes.rowOdd);
        data.$records.filter(':even').addClass(classes.rowEven);

        // if sorting set to true, allow sorting
        if ( data.sorting ) {
          methods.enableSorting.call($this);
        }

        // if sortKey is given, sort table by it and order
        if ( data.sortById ) {
          methods.sortByColumn.call($this, data.sortById, data.sortByOrder, data.sortAttr);
        }

      });
    },

    enableSorting : function() {
      console.log( 'enableSorting' );
    },

    sortByColumn : function( key, order, attr) {
      console.log( 'sortByColumn', key, order, attr);
    }

  };

  /** module definition */
  $.fn[pluginName] = function (method) {
    if ( methods[method] ) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } 
    else { 
      if ( typeof method === 'object' || !method ) {
        return methods.init.apply(this, arguments);
      } 
      else {
        $.error('The method ' + method + ' literally does not exist. Good job.');
      }
    }
  };

})( jQuery );